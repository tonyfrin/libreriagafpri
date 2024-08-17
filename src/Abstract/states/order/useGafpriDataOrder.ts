import React, { useState } from 'react';
import { gafpriFetch, getLastEntryDateAndCount } from '../../../helpers';
import { getItem, saveItem } from '../../../Context';
import { ORDER_STORAGE, ORDER_ROUTE } from '../../../constants';
import { PostsAttributes } from '../../../states';
import type { OrderItemsAttributes } from '../productsItems/useGafpriAttributesOrderItems';
import type { AddressAttributes } from '../entity';
import { PaymentAttributesReturn } from '../payment';

export type OrderCustomerAttributes = {
  orderPostsId: number;
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

export interface OrderAttributes {
  postsId: number;
  customerId: number;
  referredId: number;
  paymentPostsId: number;
  note: string;
  subTotal: number;
  subTotalTax: number;
  costTotal: number;
  total: number;
  refundAmount: number;
  posts: PostsAttributes;
  orderItems: OrderItemsAttributes[];
  orderCustomer: OrderCustomerAttributes[];
  payment: PaymentAttributesReturn | null;
}

interface EntityData {
  data: {
    items: OrderAttributes[] | [] | null;
  };
}

export type UseGafpriDataOrderReturn = {
  states: {
    isReady: boolean;
    items: EntityData;
  };
  actions: {
    onIsReady: () => void;
    notReady: () => void;
    offItems: () => void;
    handleNewItem: (newItem: OrderAttributes) => void;
    handleUpdatedItem: (itemUpdate: OrderAttributes) => void;
    getById: (id: number) => OrderAttributes | null;
  };
};

export type UseGafpriDataOrderProps = {
  token: string | null;
};

export const useGafpriDataOrder = ({
  token,
}: UseGafpriDataOrderProps): UseGafpriDataOrderReturn => {
  // Define los estados necesarios para los atributos de Site
  const [isReady, setIsReady] = useState(false);

  const [items, setItems] = useState<EntityData>({
    data: {
      items: getItem(ORDER_STORAGE, null),
    },
  });

  const onIsReady = (): void => {
    setIsReady(true);
  };

  const notReady = (): void => {
    setIsReady(false);
  };

  // Manejo de la data en DB
  const getLastItem: OrderAttributes | null = items.data?.items
    ? items.data.items.sort(
        (a, b) =>
          new Date(b.posts.modifiedAt).getTime() -
          new Date(a.posts.modifiedAt).getTime()
      )[0]
    : null;

  const setDataStorage = (newData: EntityData): void => {
    saveItem(ORDER_STORAGE, newData.data.items);
  };

  const setData = (newData: EntityData): void => {
    setItems(newData);
    setDataStorage(newData);
  };

  const onItems = (newData: EntityData): void => {
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
    const lastEntryDateAndCount = await getLastEntryDateAndCount(ORDER_ROUTE);
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
          initRoute: ORDER_ROUTE,
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

  const handleNewItem = (newItem: OrderAttributes): void => {
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

  const handleUpdatedItem = (itemUpdate: OrderAttributes): void => {
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

  function getById(id: number): OrderAttributes | null {
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
