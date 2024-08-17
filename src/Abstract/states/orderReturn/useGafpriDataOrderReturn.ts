import React, { useState } from 'react';
import { gafpriFetch, getLastEntryDateAndCount } from '../../../helpers';
import { getItem, saveItem } from '../../../Context';
import { ORDER_RETURN_ROUTE, ORDER_RETURN_STORAGE } from '../../../constants';
import { PostsAttributes } from '../../../states';
import type { OrderReturnItemsAttributes } from '../productsItems';
import { PaymentAttributesReturn } from '../payment';
import { OrderAttributes } from '../order/useGafpriDataOrder';

export interface OrderReturnAttributes {
  postsId: number;
  orderPostsId: number;
  paymentPostsId: number;
  note: string;
  subTotal: number;
  subTotalTax: number;
  costTotal: number;
  total: number;
  posts: PostsAttributes;
  orderItems: OrderReturnItemsAttributes[];
  payment: PaymentAttributesReturn | null;
  order: OrderAttributes;
}

interface OrderReturnData {
  data: {
    items: OrderReturnAttributes[] | [] | null;
  };
}

export type UseGafpriDataOrderReturnReturn = {
  states: {
    isReady: boolean;
    items: OrderReturnData;
  };
  actions: {
    onIsReady: () => void;
    notReady: () => void;
    offItems: () => void;
    handleNewItem: (newItem: OrderReturnAttributes) => void;
    handleUpdatedItem: (itemUpdate: OrderReturnAttributes) => void;
    getById: (id: number) => OrderReturnAttributes | null;
  };
};

export type UseGafpriDataOrderReturnProps = {
  token: string | null;
};

export const useGafpriDataOrderReturn = ({
  token,
}: UseGafpriDataOrderReturnProps): UseGafpriDataOrderReturnReturn => {
  // Define los estados necesarios para los atributos de Site
  const [isReady, setIsReady] = useState(false);

  const [items, setItems] = useState<OrderReturnData>({
    data: {
      items: getItem(ORDER_RETURN_STORAGE, null),
    },
  });

  const onIsReady = (): void => {
    setIsReady(true);
  };

  const notReady = (): void => {
    setIsReady(false);
  };

  // Manejo de la data en DB
  const getLastItem: OrderReturnAttributes | null = items.data?.items
    ? items.data.items.sort(
        (a, b) =>
          new Date(b.posts.modifiedAt).getTime() -
          new Date(a.posts.modifiedAt).getTime()
      )[0]
    : null;

  const setDataStorage = (newData: OrderReturnData): void => {
    saveItem(ORDER_RETURN_STORAGE, newData.data.items);
  };

  const setData = (newData: OrderReturnData): void => {
    setItems(newData);
    setDataStorage(newData);
  };

  const onItems = (newData: OrderReturnData): void => {
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
      ORDER_RETURN_ROUTE
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
          initRoute: ORDER_RETURN_ROUTE,
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

  const handleNewItem = (newItem: OrderReturnAttributes): void => {
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

  const handleUpdatedItem = (itemUpdate: OrderReturnAttributes): void => {
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

  function getById(id: number): OrderReturnAttributes | null {
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
