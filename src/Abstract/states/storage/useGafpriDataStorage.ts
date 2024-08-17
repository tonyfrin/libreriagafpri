import React, { useState } from 'react';
import { PostsAttributes } from '../../../states';
import { getItem, saveItem } from '../../../Context';
import { getLastEntryDateAndCount, gafpriFetch } from '../../../helpers';
import { STOTAGE_STORAGE, STORAGE_ROUTE } from '../../../constants';

export interface StorageStockAttributes {
  id: number;
  storageId: number;
  productId: number;
  stock: number;
  createdAt: Date;
  modifiedAt: Date;
}

export interface StorageAttributes {
  postsId: number;
  name: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postCode: string;
  country: string;
  sitesId: number;
  posts: PostsAttributes;
  storageStock: StorageStockAttributes[];
}

type DeletedStorage = {
  itemId: number;
};

interface StorageData {
  data: {
    items: StorageAttributes[] | [] | null;
  };
}

type State = {
  isReady: boolean;
  items: StorageData;
};

type Actions = {
  setIsReady: (value: boolean) => void;

  offItems: () => void;

  getById: (id: number) => StorageAttributes | null;

  handleNewItem: (newStorage: StorageAttributes) => void;

  handleUpdatedItem: (updatedStorage: StorageAttributes) => void;

  handleDeletedItem: ({ itemId }: DeletedStorage) => void;
};

export type UseGafpriDataStorageReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriDataStorageProps = {
  token: string | null;
};

export function useGafpriDataStorage({
  token,
}: UseGafpriDataStorageProps): UseGafpriDataStorageReturn {
  const [isReady, setIsReady] = useState(false);
  const [items, setItems] = useState<StorageData>({
    data: {
      items: getItem(STOTAGE_STORAGE, null),
    },
  });

  const onIsReady = (): void => {
    setIsReady(true);
  };

  const notReady = (): void => {
    setIsReady(false);
  };

  // Manejo de la data de Currencies

  const getLastItem: StorageAttributes | null = items.data?.items
    ? items.data.items.sort(
        (a, b) =>
          new Date(b.posts.modifiedAt).getTime() -
          new Date(a.posts.modifiedAt).getTime()
      )[0]
    : null;

  const setDataStorage = (newData: StorageData): void => {
    saveItem(STOTAGE_STORAGE, newData.data.items);
  };

  const setData = (newData: StorageData): void => {
    setItems(newData);
    setDataStorage(newData);
  };

  const onItems = (newData: StorageData): void => {
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
    const lastEntryDateAndCount = await getLastEntryDateAndCount(STORAGE_ROUTE);
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
          initRoute: STORAGE_ROUTE,
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

  const handleNewItem = (newItem: StorageAttributes): void => {
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

  const handleUpdatedItem = (updatedStorage: StorageAttributes): void => {
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

  const handleDeletedItem = ({ itemId }: DeletedStorage): void => {
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

  function getById(id: number): StorageAttributes | null {
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
