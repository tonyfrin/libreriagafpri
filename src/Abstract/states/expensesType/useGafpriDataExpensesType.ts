import React, { useState } from 'react';
import {
  getLastEntryDateAndCount,
  gafpriFetch,
  SelectDefault,
} from '../../../helpers';
import { getItem, saveItem } from '../../../Context';
import { EXPENSES_TYPE_STORAGE, EXPENSES_TYPE_ROUTE } from '../../../constants';
import { UseGafpriAttributesExpensesTypeReturn } from './useGafpriAttributesExpensesType';

export interface ExpensesTypeAttributes {
  id: number;
  slug: string;
  parentId: number | null;
  name: string;
  description: string | null;
  status: string;
  createdAt: Date;
  modifiedAt: Date;
}

type DeletedExpensesType = {
  itemId: number;
};

interface ExpensesTypeData {
  data: {
    items: ExpensesTypeAttributes[] | [] | null;
  };
}

type State = {
  isReady: boolean;
  items: ExpensesTypeData;
};

type Actions = {
  setIsReady: (value: boolean) => void;

  offItems: () => void;

  getById: (id: number) => ExpensesTypeAttributes | null;

  getChildren: (id: number) => ExpensesTypeAttributes[];

  handleNewItem: (newCurrency: ExpensesTypeAttributes) => void;

  handleUpdatedItem: (updatedCurrency: ExpensesTypeAttributes) => void;

  handleDeletedItem: ({ itemId }: DeletedExpensesType) => void;

  getOptionsItems: () => SelectDefault[];
};

export type UseGafpriDataExpensesTypeReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriDataExpensesTypeProps = {
  token: string | null;
  attributes: UseGafpriAttributesExpensesTypeReturn;
};

export function useGafpriDataExpensesType({
  token,
  attributes,
}: UseGafpriDataExpensesTypeProps): UseGafpriDataExpensesTypeReturn {
  const [items, setItems] = useState<ExpensesTypeData>({
    data: {
      items: getItem(EXPENSES_TYPE_STORAGE, null),
    },
  });

  const [isReady, setIsReady] = useState(false);

  const onIsReady = (): void => {
    setIsReady(true);
  };

  const notReady = (): void => {
    setIsReady(false);
  };

  const getLastItem: ExpensesTypeAttributes | null = items.data?.items
    ? items.data.items.sort(
        (a, b) =>
          new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime()
      )[0]
    : null;

  const setDataStorage = (newData: ExpensesTypeData): void => {
    saveItem(EXPENSES_TYPE_STORAGE, newData.data.items);
  };

  const setData = (newData: ExpensesTypeData): void => {
    setItems(newData);
    setDataStorage(newData);
  };

  const onItems = (newData: ExpensesTypeData): void => {
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
      EXPENSES_TYPE_ROUTE
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
          initRoute: EXPENSES_TYPE_ROUTE,
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

  const handleNewItem = (newCategory: ExpensesTypeAttributes): void => {
    setItems((prevState) => {
      const newData = {
        data: {
          items: [...(prevState.data.items || []), newCategory],
        },
      };
      setDataStorage(newData);
      return newData;
    });
  };

  const handleUpdatedItem = (updatedCategory: ExpensesTypeAttributes): void => {
    setItems((prevState) => {
      const updatedItems =
        prevState.data.items?.map((item) =>
          `${item.id}` === `${updatedCategory.id}` ? updatedCategory : item
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

  const handleDeletedItem = ({ itemId }: DeletedExpensesType): void => {
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

  function getById(id: number): ExpensesTypeAttributes | null {
    return items.data.items?.find((item) => `${item.id}` === `${id}`) || null;
  }

  function getChildren(id: number): ExpensesTypeAttributes[] {
    const children = items.data.items?.filter(
      (item) => item.parentId === id && item.id !== id
    );
    if (!children) {
      return [];
    }
    return children;
  }

  function getOptionsItems(): SelectDefault[] {
    return (
      items.data.items?.map((item) => {
        return {
          value: `${item.id}`,
          label: item.name,
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

  React.useEffect(() => {
    const children = getChildren(attributes.states.currentId);
    attributes.actions.setParentIdOptions([
      { value: 'null', label: 'Sin categoría padre' },
      ...(items.data.items
        ? items.data.items
            .filter((item) => {
              // Condición para filtrar items
              if (attributes.states.currentId === item.id) {
                return false;
              }
              if (children && children.some((child) => child.id === item.id)) {
                return false;
              }
              return true;
            })
            .map((item) => ({ value: `${item.id}`, label: `${item.name}` }))
        : []),
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attributes.states.currentId, items]);

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
    getChildren,
    getOptionsItems,
  };

  return {
    states,
    actions,
  };
}
