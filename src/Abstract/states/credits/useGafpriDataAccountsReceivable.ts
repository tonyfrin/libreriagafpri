import React, { useState } from 'react';
import { PostsAttributes } from '../../../states';
import { getItem, saveItem } from '../../../Context';
import { getLastEntryDateAndCount, gafpriFetch } from '../../../helpers';
import {
  ACCOUNTS_RECEIVABLE_STORAGE,
  ACCOUNTS_RECEIVABLE_ROUTE,
} from '../../../constants';
import { GeneralAttribute } from '../../../Validations';
import { EntityAttributes } from '../entity';
import { CreditOpeningAttributes } from './creditOpening';

export interface AccountsReceivableAttributes {
  postsId: number;
  entityId: number;
  authorizedId: number;
  limit: number;
  timeToPay: number;
  creditScore: number;
  balance: number;
  statistics: GeneralAttribute[];
  posts: PostsAttributes;
  entity: EntityAttributes;
  creditOpening: CreditOpeningAttributes[];
}

type DeletedAccountsReceivable = {
  itemId: number;
};

interface AccountsReceivableData {
  data: {
    items: AccountsReceivableAttributes[] | [] | null;
  };
}

type State = {
  isReady: boolean;
  items: AccountsReceivableData;
};

type Actions = {
  setIsReady: (value: boolean) => void;

  offItems: () => void;

  getById: (id: number) => AccountsReceivableAttributes | null;

  handleNewItem: (newStorage: AccountsReceivableAttributes) => void;

  handleUpdatedItem: (updatedStorage: AccountsReceivableAttributes) => void;

  handleDeletedItem: ({ itemId }: DeletedAccountsReceivable) => void;
};

export type UseGafpriDataAccountsReceivableReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriDataAccountsReceivableProps = {
  token: string | null;
};

export function useGafpriDataAccountsReceivable({
  token,
}: UseGafpriDataAccountsReceivableProps): UseGafpriDataAccountsReceivableReturn {
  const [isReady, setIsReady] = useState(false);
  const [items, setItems] = useState<AccountsReceivableData>({
    data: {
      items: getItem(ACCOUNTS_RECEIVABLE_STORAGE, null),
    },
  });

  const onIsReady = (): void => {
    setIsReady(true);
  };

  const notReady = (): void => {
    setIsReady(false);
  };

  // Manejo de la data de Currencies

  const getLastItem: AccountsReceivableAttributes | null = items.data?.items
    ? items.data.items.sort(
        (a, b) =>
          new Date(b.posts.modifiedAt).getTime() -
          new Date(a.posts.modifiedAt).getTime()
      )[0]
    : null;

  const setDataStorage = (newData: AccountsReceivableData): void => {
    saveItem(ACCOUNTS_RECEIVABLE_STORAGE, newData.data.items);
  };

  const setData = (newData: AccountsReceivableData): void => {
    setItems(newData);
    setDataStorage(newData);
  };

  const onItems = (newData: AccountsReceivableData): void => {
    setData(newData);
    onIsReady();
  };

  const offItems = (): void => {
    setData({
      data: {
        items: null,
      },
    });
    notReady();
  };

  const getItems = async (): Promise<void> => {
    const lastEntryDateAndCount = await getLastEntryDateAndCount(
      ACCOUNTS_RECEIVABLE_ROUTE
    );
    const lastDate = getLastItem?.posts.modifiedAt || null;
    const count = items.data.items?.length || 0;

    if (
      items.data.items === null ||
      `${lastEntryDateAndCount?.date}` !== `${lastDate}` ||
      `${lastEntryDateAndCount?.count}` !== `${count}`
    ) {
      if (token) {
        gafpriFetch({
          initMethod: 'GET',
          initRoute: ACCOUNTS_RECEIVABLE_ROUTE,
          initToken: { token },
          functionFetching: notReady,
          functionSuccess: onItems,
        });
      } else {
        notReady();
      }
    } else {
      onIsReady();
    }
  };

  const handleNewItem = (newItem: AccountsReceivableAttributes): void => {
    setItems((prevState) => {
      const newData = {
        data: {
          items: [...(prevState.data.items || []), newItem],
        },
      };
      setDataStorage(newData);
      return newData;
    });
  };

  const handleUpdatedItem = (
    updatedStorage: AccountsReceivableAttributes
  ): void => {
    setItems((prevState) => {
      const updatedItems =
        prevState.data.items?.map((storage) =>
          storage.postsId === updatedStorage.postsId ? updatedStorage : storage
        ) || [];
      const newData = {
        data: {
          items: updatedItems,
        },
      };
      setDataStorage(newData);
      return newData;
    });
  };

  const handleDeletedItem = ({ itemId }: DeletedAccountsReceivable): void => {
    setItems((prevState) => {
      const filteredItems =
        prevState.data.items?.filter(
          (storage) => `${storage.postsId}` !== `${itemId}`
        ) || [];

      const newData = {
        data: {
          items: filteredItems,
        },
      };

      setDataStorage(newData);
      return newData;
    });
  };

  function getById(id: number): AccountsReceivableAttributes | null {
    return items.data.items?.find((storage) => storage.postsId === id) || null;
  }

  /**
   * Effects
   *
   *
   */

  React.useEffect(() => {
    getItems();
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Export
   *
   *
   */
  const states = {
    isReady,
    items,
  };

  const actions = {
    setIsReady,

    getById,

    offItems,

    handleNewItem,

    handleUpdatedItem,

    handleDeletedItem,
  };

  return {
    states,
    actions,
  };
}
