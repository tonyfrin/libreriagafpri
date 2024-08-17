import React, { useState } from 'react';
import { getItem, saveItem } from '../../../../Context';
import { getLastEntryDateAndCount, gafpriFetch } from '../../../../helpers';
import {
  WALLET_ACCOUNT_STORAGE,
  WALLET_ACCOUNT_ROUTE,
} from '../../../../constants';

export interface WalletAccountAttributes {
  id: number;
  userId: number;
  authorId: number;
  currenciesId: number;
  name: string;
  status: string;
  balance: number;
  createdAt: Date;
  modifiedAt: Date;
}

type DeletedWalletAccount = {
  itemId: number;
};

interface WalletAccountData {
  data: {
    items: WalletAccountAttributes[] | [] | null;
  };
}

type State = {
  isReady: boolean;
  items: WalletAccountData;
};

type Actions = {
  setIsReady: (value: boolean) => void;

  offItems: () => void;

  getById: (id: number) => WalletAccountAttributes | null;

  handleNewItem: (newStorage: WalletAccountAttributes) => void;

  handleUpdatedItem: (updatedStorage: WalletAccountAttributes) => void;

  handleDeletedItem: ({ itemId }: DeletedWalletAccount) => void;
};

export type UseGafpriDataWalletAccountReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriDataWalletAccountProps = {
  token: string | null;
};

export function useGafpriDataWalletAccount({
  token,
}: UseGafpriDataWalletAccountProps): UseGafpriDataWalletAccountReturn {
  const [isReady, setIsReady] = useState(false);
  const [items, setItems] = useState<WalletAccountData>({
    data: {
      items: getItem(WALLET_ACCOUNT_STORAGE, null),
    },
  });

  const onIsReady = (): void => {
    setIsReady(true);
  };

  const notReady = (): void => {
    setIsReady(false);
  };

  const getLastItem: WalletAccountAttributes | null = items.data?.items
    ? items.data.items.sort(
        (a, b) =>
          new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime()
      )[0]
    : null;

  const setDataStorage = (newData: WalletAccountData): void => {
    saveItem(WALLET_ACCOUNT_STORAGE, newData.data.items);
  };

  const setData = (newData: WalletAccountData): void => {
    setItems(newData);
    setDataStorage(newData);
  };

  const onItems = (newData: WalletAccountData): void => {
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
      WALLET_ACCOUNT_ROUTE
    );
    const lastDate = getLastItem?.modifiedAt || null;
    const count = items.data.items?.length || 0;

    if (
      items.data.items === null ||
      `${lastEntryDateAndCount?.date}` !== `${lastDate}` ||
      `${lastEntryDateAndCount?.count}` !== `${count}`
    ) {
      if (token) {
        gafpriFetch({
          initMethod: 'GET',
          initRoute: WALLET_ACCOUNT_ROUTE,
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

  const handleNewItem = (newItem: WalletAccountAttributes): void => {
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

  const handleUpdatedItem = (updatedItem: WalletAccountAttributes): void => {
    setItems((prevState) => {
      const updatedItems =
        prevState.data.items?.map((item) =>
          `${item.id}` === `${updatedItem.id}` ? updatedItem : item
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

  const handleDeletedItem = ({ itemId }: DeletedWalletAccount): void => {
    setItems((prevState) => {
      const filteredItems =
        prevState.data.items?.filter((item) => `${item.id}` !== `${itemId}`) ||
        [];

      const newData = {
        data: {
          items: filteredItems,
        },
      };

      setDataStorage(newData);
      return newData;
    });
  };

  function getById(id: number): WalletAccountAttributes | null {
    return items.data.items?.find((item) => `${item.id}` === `${id}`) || null;
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
