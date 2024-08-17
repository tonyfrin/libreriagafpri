import React, { useState } from 'react';
import { getItem, saveItem } from '../../../../Context';
import { getLastEntryDateAndCount, gafpriFetch } from '../../../../helpers';
import {
  SHIPPING_METHODS_ROUTE,
  SHIPPING_METHODS_STORAGE,
} from '../../../../constants';

export interface ShippingMethodsAttributes {
  id: number;
  shippingAreasId: string;
  name: string;
  description: string;
  cost: string;
  type: string;
  shippingTimeDays: string;
  availableShippingServices: string;
  taxStatus: string;
  taxClass: string;
  status: string;
  createdAt: Date;
  modifiedAt: Date;
}

interface ShippingMethodsData {
  data: {
    items: ShippingMethodsAttributes[] | [] | null;
  };
}

type DeletedShippingMethods = {
  itemId: number;
};

type State = {
  items: ShippingMethodsData;
  isReady: boolean;
};

type Actions = {
  offItems: () => void;
  handleNewItem: (newItem: ShippingMethodsAttributes) => void;
  handleUpdated: (updatedItem: ShippingMethodsAttributes) => void;
  handleDeleted: ({ itemId }: DeletedShippingMethods) => void;
  getById: (id: number) => ShippingMethodsAttributes | null;
  filterByShippingAreasId: (
    targetShippingAreasId: number
  ) => ShippingMethodsAttributes[];
};

export type UseGafpriDataShippingMethodsReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriDataShippingMethodsProps = {
  token: string | null;
};

export function useGafpriDataShippingMethods({
  token,
}: UseGafpriDataShippingMethodsProps): UseGafpriDataShippingMethodsReturn {
  const [isReady, setIsReady] = useState(false);
  const [items, setItems] = useState<ShippingMethodsData>({
    data: {
      items: getItem(SHIPPING_METHODS_STORAGE, null),
    },
  });

  const onIsReady = (): void => {
    setIsReady(true);
  };

  const notReady = (): void => {
    setIsReady(false);
  };

  // Manejo de la data

  const getLastItem: ShippingMethodsAttributes | null = items.data?.items
    ? items.data.items.sort(
        (a, b) =>
          new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime()
      )[0]
    : null;

  const setDataStorage = (newData: ShippingMethodsData): void => {
    saveItem(SHIPPING_METHODS_STORAGE, newData.data.items);
  };

  const setData = (newData: ShippingMethodsData): void => {
    setItems(newData);
    setDataStorage(newData);
  };

  const onItems = (newData: ShippingMethodsData): void => {
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
      SHIPPING_METHODS_ROUTE
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
          initRoute: SHIPPING_METHODS_ROUTE,
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

  const handleNewItem = (newItem: ShippingMethodsAttributes): void => {
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

  const handleUpdated = (updatedItem: ShippingMethodsAttributes): void => {
    setItems((prevState) => {
      const updatedItems =
        prevState.data.items?.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
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

  const handleDeleted = ({ itemId }: DeletedShippingMethods): void => {
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

  function getById(id: number): ShippingMethodsAttributes | null {
    return items.data.items?.find((item) => item.id === id) || null;
  }

  function filterByShippingAreasId(
    targetShippingAreasId: number
  ): ShippingMethodsAttributes[] {
    return (
      items.data.items?.filter(
        (method) => `${method.shippingAreasId}` === `${targetShippingAreasId}`
      ) || []
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
    items,
    isReady,
  };

  const actions = {
    offItems,
    handleNewItem,
    handleUpdated,
    handleDeleted,
    getById,
    filterByShippingAreasId,
  };

  return {
    states,
    actions,
  };
}
