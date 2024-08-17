import React, { useState } from 'react';
import { PostsAttributes } from '../../../states';
import { getItem, saveItem } from '../../../Context';
import {
  getLastEntryDateAndCount,
  gafpriFetch,
  SelectDefault,
} from '../../../helpers';
import {
  CASH_REGISTER_TYPE_STORAGE,
  CASH_REGISTER_TYPE_ROUTE,
} from '../../../constants';
import { CashRegisterTypeUserAttributes } from './cashRegisterTypeUser';
import { CashTransactionsAttributes } from '../cashRegister';

export type CashRegisterCurrenciesAttributes = {
  id?: number;
  cashRegisterPostsId?: number;
  currenciesId: number;
  initCash: number;
  endCash: number;
  initCashChange: number;
  endCashChange: number;
};

export type CashRegisterAttributes = {
  postsId: number;
  cashRegisterTypePostsId: number;
  posts: PostsAttributes;
  cashTransactions: CashTransactionsAttributes[];
  cashRegisterCurrencies: CashRegisterCurrenciesAttributes[];
};

export type CashRegisterTypeCurrenciesAttributes = {
  id?: number;
  cashRegisterTypePostsId: number;
  currenciesId: number;
  balance: number;
  balanceChange: number;
};

export interface CashRegisterTypeAttributes {
  postsId: number;
  name: string;
  sitesId: number;
  posts: PostsAttributes;
  cashRegisterTypeUser: CashRegisterTypeUserAttributes[];
  cashRegister: CashRegisterAttributes[];
  cashRegisterTypeCurrencies: CashRegisterTypeCurrenciesAttributes[];
}

type DeletedCashRegisterType = {
  itemId: number;
};

interface CashRegisterTypeData {
  data: {
    items: CashRegisterTypeAttributes[] | [] | null;
  };
}

type State = {
  isReady: boolean;
  items: CashRegisterTypeData;
};

type Actions = {
  setIsReady: (value: boolean) => void;

  offItems: () => void;

  getById: (id: number) => CashRegisterTypeAttributes | null;

  handleNewItem: (newStorage: CashRegisterTypeAttributes) => void;

  handleUpdatedItem: (updatedStorage: CashRegisterTypeAttributes) => void;

  handleDeletedItem: ({ itemId }: DeletedCashRegisterType) => void;

  getOptionsItems: (sitesId: number) => SelectDefault[];

  getCurrentCashRegisterPostsId(postsId: number): number;

  getOptionsItemsByAutorized: (userId: number) => SelectDefault[];
};

export type UseGafpriDataCashRegisterTypeReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriDataCashRegisterTypeProps = {
  token: string | null;
};

export function useGafpriDataCashRegisterType({
  token,
}: UseGafpriDataCashRegisterTypeProps): UseGafpriDataCashRegisterTypeReturn {
  const [isReady, setIsReady] = useState(false);
  const [items, setItems] = useState<CashRegisterTypeData>({
    data: {
      items: getItem(CASH_REGISTER_TYPE_STORAGE, null),
    },
  });

  const onIsReady = (): void => {
    setIsReady(true);
  };

  const notReady = (): void => {
    setIsReady(false);
  };

  // Manejo de la data de Currencies

  const getLastItem: CashRegisterTypeAttributes | null = items.data?.items
    ? items.data.items.sort(
        (a, b) =>
          new Date(b.posts.modifiedAt).getTime() -
          new Date(a.posts.modifiedAt).getTime()
      )[0]
    : null;

  const setDataStorage = (newData: CashRegisterTypeData): void => {
    saveItem(CASH_REGISTER_TYPE_STORAGE, newData.data.items);
  };

  const setData = (newData: CashRegisterTypeData): void => {
    setItems(newData);
    setDataStorage(newData);
  };

  const onItems = (newData: CashRegisterTypeData): void => {
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
      CASH_REGISTER_TYPE_ROUTE
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
          initRoute: CASH_REGISTER_TYPE_ROUTE,
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

  const handleNewItem = (newItem: CashRegisterTypeAttributes): void => {
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
    updatedStorage: CashRegisterTypeAttributes
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

  const handleDeletedItem = ({ itemId }: DeletedCashRegisterType): void => {
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

  function getById(id: number): CashRegisterTypeAttributes | null {
    return items.data.items?.find((storage) => storage.postsId === id) || null;
  }

  function getOptionsItems(sitesId: number): SelectDefault[] {
    return (
      items.data.items
        ?.filter((item) => `${item.sitesId}` === `${sitesId}`)
        .map((filteredItem) => {
          return {
            value: `${filteredItem.postsId}`,
            label: filteredItem.name,
          };
        }) || []
    );
  }

  function getCurrentCashRegisterPostsId(postsId: number): number {
    const cashRegisterType = getById(postsId);
    return cashRegisterType?.cashRegister[0].postsId || 0;
  }

  function getOptionsItemsByAutorized(userId: number): SelectDefault[] {
    return (
      items.data.items
        ?.filter((item) =>
          item.cashRegisterTypeUser.some(
            (user) => `${user.userId}` === `${userId}` && user.isAuthorized
          )
        )
        .map((filteredItem) => {
          return {
            value: `${filteredItem.postsId}`,
            label: filteredItem.name,
          };
        }) || []
    );
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

    getOptionsItems,

    getCurrentCashRegisterPostsId,

    getOptionsItemsByAutorized,
  };

  return {
    states,
    actions,
  };
}
