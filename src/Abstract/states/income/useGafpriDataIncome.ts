import React, { useState } from 'react';
import { gafpriFetch, getLastEntryDateAndCount } from '../../../helpers';
import { getItem, saveItem } from '../../../Context';
import { INCOME_STORAGE, INCOME_ROUTE } from '../../../constants';
import { PostsAttributes } from '../../../states';
import type { AddressAttributes } from '../entity';

export type IncomeCustomerAttributes = {
  incomePostsId: number;
  customerId: number;
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

export interface IncomeAttributes {
  postsId: number;
  customerId: number;
  paymentPostsId: number;
  projectsPostsId: number;
  note: string;
  subTotal: number;
  subTotalTax: number;
  total: number;
  refundAmount: number;
  posts: PostsAttributes;
  payment: PaymentAttributes[];
  incomeCustomer: IncomeCustomerAttributes[];
}

interface IncomeData {
  data: {
    items: IncomeAttributes[] | [] | null;
  };
}

export type UseGafpriDataIncomeReturn = {
  states: {
    isReady: boolean;
    items: IncomeData;
  };
  actions: {
    onIsReady: () => void;
    notReady: () => void;
    offItems: () => void;
    handleNewItem: (newItem: IncomeAttributes) => void;
    handleUpdatedItem: (itemUpdate: IncomeAttributes) => void;
    getById: (id: number) => IncomeAttributes | null;
  };
};

export type UseGafpriDataIncomeProps = {
  token: string | null;
};

export const useGafpriDataIncome = ({
  token,
}: UseGafpriDataIncomeProps): UseGafpriDataIncomeReturn => {
  const [isReady, setIsReady] = useState(false);

  const [items, setItems] = useState<IncomeData>({
    data: {
      items: getItem(INCOME_STORAGE, null),
    },
  });

  const onIsReady = (): void => {
    setIsReady(true);
  };

  const notReady = (): void => {
    setIsReady(false);
  };

  // Manejo de la data en DB
  const getLastItem: IncomeAttributes | null = items.data?.items
    ? items.data.items.sort(
        (a, b) =>
          new Date(b.posts.modifiedAt).getTime() -
          new Date(a.posts.modifiedAt).getTime()
      )[0]
    : null;

  const setDataStorage = (newData: IncomeData): void => {
    saveItem(INCOME_STORAGE, newData.data.items);
  };

  const setData = (newData: IncomeData): void => {
    setItems(newData);
    setDataStorage(newData);
  };

  const onItems = (newData: IncomeData): void => {
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
    const lastEntryDateAndCount = await getLastEntryDateAndCount(INCOME_ROUTE);
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
          initRoute: INCOME_ROUTE,
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

  const handleNewItem = (newItem: IncomeAttributes): void => {
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

  const handleUpdatedItem = (itemUpdate: IncomeAttributes): void => {
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

  function getById(id: number): IncomeAttributes | null {
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
