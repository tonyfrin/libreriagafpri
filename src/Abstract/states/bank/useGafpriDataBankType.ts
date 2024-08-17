import React, { useState } from 'react';
import { PostsAttributes } from '../../../states';
import { getItem, saveItem } from '../../../Context';
import {
  getLastEntryDateAndCount,
  gafpriFetch,
  SelectDefault,
} from '../../../helpers';
import { BANK_TYPE_STORAGE, BANK_TYPE_ROUTE } from '../../../constants';
import { GeneralAttribute } from '../../../Validations';
import { BankTransactionsAttributes } from './bankTransactions';

export interface BankTypeAttributes {
  postsId: number;
  sitesId: number;
  name: string;
  bankName: string;
  account: string;
  accountType: string;
  balance: number;
  balanceChange: number;
  currenciesId: number;
  settings: GeneralAttribute[];
  posts: PostsAttributes;
  bankTransactions: BankTransactionsAttributes[];
}

type DeletedBankType = {
  itemId: number;
};

interface BankTypeData {
  data: {
    items: BankTypeAttributes[] | [] | null;
  };
}

type State = {
  isReady: boolean;
  items: BankTypeData;
};

type Actions = {
  setIsReady: (value: boolean) => void;

  offItems: () => void;

  getById: (id: number) => BankTypeAttributes | null;

  handleNewItem: (newStorage: BankTypeAttributes) => void;

  handleUpdatedItem: (updatedStorage: BankTypeAttributes) => void;

  handleDeletedItem: ({ itemId }: DeletedBankType) => void;

  getOptionsItems: (sitesId: number) => SelectDefault[];

  getOptionsByMethods: (sitesId: number, methods: string) => SelectDefault[];

  isWalletGafpri: (id: number) => boolean;
};

export type UseGafpriDataBankTypeReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriDataBankTypeProps = {
  token: string | null;
};

export function useGafpriDataBankType({
  token,
}: UseGafpriDataBankTypeProps): UseGafpriDataBankTypeReturn {
  const [isReady, setIsReady] = useState(false);
  const [items, setItems] = useState<BankTypeData>({
    data: {
      items: getItem(BANK_TYPE_STORAGE, null),
    },
  });

  const onIsReady = (): void => {
    setIsReady(true);
  };

  const notReady = (): void => {
    setIsReady(false);
  };

  // Manejo de la data de Currencies

  const getLastItem: BankTypeAttributes | null = items.data?.items
    ? items.data.items.sort(
        (a, b) =>
          new Date(b.posts.modifiedAt).getTime() -
          new Date(a.posts.modifiedAt).getTime()
      )[0]
    : null;

  const setDataStorage = (newData: BankTypeData): void => {
    saveItem(BANK_TYPE_STORAGE, newData.data.items);
  };

  const setData = (newData: BankTypeData): void => {
    setItems(newData);
    setDataStorage(newData);
  };

  const onItems = (newData: BankTypeData): void => {
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
      BANK_TYPE_ROUTE
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
          initRoute: BANK_TYPE_ROUTE,
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

  const handleNewItem = (newItem: BankTypeAttributes): void => {
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

  const handleUpdatedItem = (updatedStorage: BankTypeAttributes): void => {
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

  const handleDeletedItem = ({ itemId }: DeletedBankType): void => {
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

  function getById(id: number): BankTypeAttributes | null {
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

  const getOptionsByMethods = (
    sitesId: number,
    methods: string
  ): SelectDefault[] => {
    return (
      items.data.items
        ?.filter(
          (item) =>
            `${item.sitesId}` === `${sitesId}` &&
            item.settings.some(
              (setting) => setting.name === methods && setting.value === 'yes'
            )
        )
        .map((filteredItem) => {
          return {
            value: `${filteredItem.postsId}`,
            label: filteredItem.name,
          };
        }) || []
    );
  };

  const isWalletGafpri = (id: number): boolean => {
    return (
      items.data.items?.some(
        (item) =>
          `${item.postsId}` === `${id}` &&
          item.settings.some(
            (setting) =>
              setting.name === 'walletGafpri' && setting.value === 'yes'
          )
      ) || false
    );
  };

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

    getOptionsByMethods,

    isWalletGafpri,
  };

  return {
    states,
    actions,
  };
}
