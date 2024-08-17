import React, { useState } from 'react';
import { getItem, saveItem } from '../../../../Context';
import {
  getLastEntryDateAndCount,
  gafpriFetch,
  SelectDefault,
} from '../../../../helpers';
import { TAX_CLASSES_STORAGE, TAX_CLASSES_ROUTE } from '../../../../constants';

export interface TaxClassesAttributes {
  id: number;
  slug: string;
  name: string;
  description?: string;
  createdAt: Date;
  modifiedAt: Date;
}

interface TaxClassesData {
  data: {
    items: TaxClassesAttributes[] | [] | null;
  };
}

type DeletedTaxClasses = {
  itemId: number;
};

type State = {
  items: TaxClassesData;
  isReady: boolean;
};

type Actions = {
  offItems: () => void;
  handleNewItem: (newItem: TaxClassesAttributes) => void;
  handleUpdated: (updatedItem: TaxClassesAttributes) => void;
  handleDeleted: ({ itemId }: DeletedTaxClasses) => void;
  getById: (id: number) => TaxClassesAttributes | null;
  getOptions: () => SelectDefault[];
};

export type UseGafpriDataTaxClassesReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriDataTaxClassesProps = {
  token: string | null;
};

export function useGafpriDataTaxClasses({
  token,
}: UseGafpriDataTaxClassesProps): UseGafpriDataTaxClassesReturn {
  const [isReady, setIsReady] = useState(false);
  const [items, setItems] = useState<TaxClassesData>({
    data: {
      items: getItem(TAX_CLASSES_STORAGE, null),
    },
  });

  const onIsReady = (): void => {
    setIsReady(true);
  };

  const notReady = (): void => {
    setIsReady(false);
  };

  // Manejo de la data

  const getLastItem: TaxClassesAttributes | null = items.data?.items
    ? items.data.items.sort(
        (a, b) =>
          new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime()
      )[0]
    : null;

  const setDataStorage = (newData: TaxClassesData): void => {
    saveItem(TAX_CLASSES_STORAGE, newData.data.items);
  };

  const setData = (newData: TaxClassesData): void => {
    setItems(newData);
    setDataStorage(newData);
  };

  const onItems = (newData: TaxClassesData): void => {
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
      TAX_CLASSES_ROUTE
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
          initRoute: TAX_CLASSES_ROUTE,
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

  const handleNewItem = (newItem: TaxClassesAttributes): void => {
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

  const handleUpdated = (updatedItem: TaxClassesAttributes): void => {
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

  const handleDeleted = ({ itemId }: DeletedTaxClasses): void => {
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

  function getById(id: number): TaxClassesAttributes | null {
    return items.data.items?.find((item) => item.id === id) || null;
  }

  function getOptions(): SelectDefault[] {
    const options: SelectDefault[] = [];

    items.data.items?.forEach((item) => {
      options.push({ label: item.name, value: `${item.id}` });
    });

    return options;
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
    items,
    isReady,
  };

  const actions = {
    offItems,
    handleNewItem,
    handleUpdated,
    handleDeleted,
    getById,
    getOptions,
  };

  return {
    states,
    actions,
  };
}
