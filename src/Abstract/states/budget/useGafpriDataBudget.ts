import React, { useState } from 'react';
import { gafpriFetch, getLastEntryDateAndCount } from '../../../helpers';
import { getItem, saveItem } from '../../../Context';
import { BUDGET_ROUTE, BUDGET_STORAGE } from '../../../constants';
import { PostsAttributes } from '../../../states';
import type { BudgetItemsAttributes } from '../productsItems';
import type { AddressAttributes } from '../entity';

export interface BudgetCustomerAttributes {
  budgetPostsId: number;
  customerId: number;
  email: string;
  phone: string;
  name: string;
  lastName: string;
  address: AddressAttributes[];
  documentIndex: string;
  documentDigit: string;
  documentType: string;
}

export interface BudgetAttributes {
  postsId: number;
  customerId: number;
  referredId: number;
  note: string;
  subTotal: number;
  subTotalTax: number;
  costTotal: number;
  total: number;
  refundAmount: number;
  posts: PostsAttributes;
  budgetItems: BudgetItemsAttributes[];
  budgetCustomer: BudgetCustomerAttributes[];
}

interface BudgetData {
  data: {
    items: BudgetAttributes[] | [] | null;
  };
}

export type UseGafpriDataBudgetReturn = {
  states: {
    isReady: boolean;
    items: BudgetData;
  };
  actions: {
    onIsReady: () => void;
    notReady: () => void;
    offItems: () => void;
    handleNewItem: (newItem: BudgetAttributes) => void;
    handleUpdatedItem: (itemUpdate: BudgetAttributes) => void;
    getById: (id: number) => BudgetAttributes | null;
  };
};

export type UseGafpriDataBudgetProps = {
  token: string | null;
};

export const useGafpriDataBudget = ({
  token,
}: UseGafpriDataBudgetProps): UseGafpriDataBudgetReturn => {
  // Define los estados necesarios para los atributos de Site
  const [isReady, setIsReady] = useState(false);

  const [items, setItems] = useState<BudgetData>({
    data: {
      items: getItem(BUDGET_STORAGE, null),
    },
  });

  const onIsReady = (): void => {
    setIsReady(true);
  };

  const notReady = (): void => {
    setIsReady(false);
  };

  // Manejo de la data en DB
  const getLastItem: BudgetAttributes | null = items.data?.items
    ? items.data.items.sort(
        (a, b) =>
          new Date(b.posts.modifiedAt).getTime() -
          new Date(a.posts.modifiedAt).getTime()
      )[0]
    : null;

  const setDataStorage = (newData: BudgetData): void => {
    saveItem(BUDGET_STORAGE, newData.data.items);
  };

  const setData = (newData: BudgetData): void => {
    setItems(newData);
    setDataStorage(newData);
  };

  const onItems = (newData: BudgetData): void => {
    setData(newData);
    onIsReady();
  };

  const offItems = (): void => {
    const newData = {
      data: {
        items: null,
      },
    };
    setData(newData);
    notReady();
  };

  const getItems = async (): Promise<void> => {
    const lastEntryDateAndCount = await getLastEntryDateAndCount(BUDGET_ROUTE);
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
          initRoute: BUDGET_ROUTE,
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

  const handleNewItem = (newItem: BudgetAttributes): void => {
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

  const handleUpdatedItem = (itemUpdate: BudgetAttributes): void => {
    setItems((prevState) => {
      const updatedItems =
        prevState.data.items?.map((item) =>
          `${item.postsId}` === `${itemUpdate.postsId}` ? itemUpdate : item
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

  function getById(id: number): BudgetAttributes | null {
    return items.data.items?.find((item) => item.postsId === id) || null;
  }

  // Efects
  React.useEffect(() => {
    getItems();
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  const states = {
    isReady,
    items,
  };

  // Define las acciones necesarias para los atributos de Site
  const actions = {
    onIsReady,
    notReady,
    getById,
    handleNewItem,
    handleUpdatedItem,
    offItems,
  };

  return {
    states,
    actions,
  };
};
