import React, { useState } from 'react';
import { gafpriFetch, getLastEntryDateAndCount } from '../../../helpers';
import { getItem, saveItem } from '../../../Context';
import { EXPENSES_STORAGE, EXPENSES_ROUTE } from '../../../constants';
import { PostsAttributes } from '../../../states';
import type { AddressAttributes } from '../entity';

export type ExpensesSupplierAttributes = {
  expensesPostsId: number;
  supplierId: number;
  email: string;
  phone: string;
  name: string;
  lastName?: string;
  address: AddressAttributes[];
  documentIndex?: string;
  documentDigit: string;
  documentType: string;
};

interface CashTransactionsAttributes {
  id: number;
  cashRegisterTypePostsId: number;
  cashRegisterPostsId: number;
  type: string;
  amount: number;
  change: number;
  balance: number;
  balanceChange: number;
  currenciesId: number;
  paymentMethodsPostsId: number;
  note: string;
  createdAt: Date;
}

interface PaymentMethodsAttributes {
  postsId: number;
  paymentPostsId: number;
  type: string;
  methodType: string;
  paymentType: string;
  currenciesId: number;
  bank: string;
  number: string;
  amount: number;
  change: number;
  note: string;
  posts: PostsAttributes;
  cashTransactions: CashTransactionsAttributes[];
}

interface PaymentAttributes {
  postsId: number;
  total: number;
  note: string;
  type: string;
  posts: PostsAttributes;
  paymentMethods: PaymentMethodsAttributes[];
}

export interface ExpensesAttributes {
  postsId: number;
  supplierId: number;
  expensesTypeId: number;
  paymentPostsId: number;
  invoice: string;
  projectsPostsId: number;
  note: string;
  subTotal: number;
  subTotalTax: number;
  total: number;
  refundAmount: number;
  posts: PostsAttributes;
  payment: PaymentAttributes[];
  expensesSupplier: ExpensesSupplierAttributes[];
}

interface ExpensesData {
  data: {
    items: ExpensesAttributes[] | [] | null;
  };
}

export type UseGafpriDataExpensesReturn = {
  states: {
    isReady: boolean;
    items: ExpensesData;
  };
  actions: {
    onIsReady: () => void;
    notReady: () => void;
    offItems: () => void;
    handleNewItem: (newItem: ExpensesAttributes) => void;
    handleUpdatedItem: (itemUpdate: ExpensesAttributes) => void;
    getById: (id: number) => ExpensesAttributes | null;
  };
};

export type UseGafpriDataExpensesProps = {
  token: string | null;
};

export const useGafpriDataExpenses = ({
  token,
}: UseGafpriDataExpensesProps): UseGafpriDataExpensesReturn => {
  // Define los estados necesarios para los atributos de Site
  const [isReady, setIsReady] = useState(false);

  const [items, setItems] = useState<ExpensesData>({
    data: {
      items: getItem(EXPENSES_STORAGE, null),
    },
  });

  const onIsReady = (): void => {
    setIsReady(true);
  };

  const notReady = (): void => {
    setIsReady(false);
  };

  // Manejo de la data en DB
  const getLastItem: ExpensesAttributes | null = items.data?.items
    ? items.data.items.sort(
        (a, b) =>
          new Date(b.posts.modifiedAt).getTime() -
          new Date(a.posts.modifiedAt).getTime()
      )[0]
    : null;

  const setDataStorage = (newData: ExpensesData): void => {
    saveItem(EXPENSES_STORAGE, newData.data.items);
  };

  const setData = (newData: ExpensesData): void => {
    setItems(newData);
    setDataStorage(newData);
  };

  const onItems = (newData: ExpensesData): void => {
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
    const lastEntryDateAndCount = await getLastEntryDateAndCount(
      EXPENSES_ROUTE
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
          initRoute: EXPENSES_ROUTE,
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

  const handleNewItem = (newItem: ExpensesAttributes): void => {
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

  const handleUpdatedItem = (itemUpdate: ExpensesAttributes): void => {
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

  function getById(id: number): ExpensesAttributes | null {
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
