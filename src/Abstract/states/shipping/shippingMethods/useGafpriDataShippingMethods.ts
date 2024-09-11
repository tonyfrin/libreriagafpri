import React, { useState } from 'react';
import { gafpriFetch } from '../../../../helpers';
import { SHIPPING_METHODS_ROUTE } from '../../../../constants';

export interface ShippingMethodsAttributes {
  id: number;
  shippingAreasId: number;
  name: string;
  description: string;
  cost: number;
  type: string;
  roles: number[];
  workDaysHours: Record<number, string>;
  preparationTime: number;
  pickupTime: number;
  deliveryTime: number;
  typeStart: string;
  valueStart: string;
  conditional: boolean;
  typeConditional?: string;
  valueConditional?: string;
  status: string;
  createdAt: Date;
  modifiedAt: Date;
}

type DeletedShippingMethods = {
  itemId: number;
};

type State = {
  items: ShippingMethodsAttributes[] | null;
  isReady: boolean;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
type Actions = {
  setIsReady: (value: boolean) => void;
  handleNewItem: (newItem: ShippingMethodsAttributes) => void;
  handleUpdated: (updatedItem: ShippingMethodsAttributes) => void;
  handleDeleted: ({ itemId }: DeletedShippingMethods) => void;
  getById: (id: number) => ShippingMethodsAttributes | null;
  filterByShippingAreasId: (
    methods: ShippingMethodsAttributes[],
    targetShippingAreasId: number
  ) => ShippingMethodsAttributes[];
  getItems: () => Promise<any>;
  setItems: (value: ShippingMethodsAttributes[]) => void;
};
/* eslint-enable @typescript-eslint/no-explicit-any */

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
  const [items, setItems] = useState<ShippingMethodsAttributes[] | null>(null);

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const getItems = async (): Promise<any> => {
    if (token) {
      const data = await gafpriFetch({
        initMethod: 'GET',
        initRoute: SHIPPING_METHODS_ROUTE,
        initToken: { token },
      });
      return data;
    }
    return null;
  };
  /* eslint-enable @typescript-eslint/no-explicit-any */

  const handleNewItem = (newItem: ShippingMethodsAttributes): void => {
    setItems((prevState) => {
      const newData = [...(prevState || []), newItem];
      return newData;
    });
  };

  const handleUpdated = (updatedItem: ShippingMethodsAttributes): void => {
    setItems((prevState) => {
      const updatedItems =
        prevState?.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        ) || [];
      const newData = updatedItems;
      return newData;
    });
  };

  const handleDeleted = ({ itemId }: DeletedShippingMethods): void => {
    setItems((prevState) => {
      const filteredItems =
        prevState?.filter((item) => `${item.id}` !== `${itemId}`) || [];

      const newData = filteredItems;
      return newData;
    });
  };

  function getById(id: number): ShippingMethodsAttributes | null {
    return items?.find((item) => item.id === id) || null;
  }

  function filterByShippingAreasId(
    methods: ShippingMethodsAttributes[],
    targetShippingAreasId: number
  ): ShippingMethodsAttributes[] {
    return (
      methods.filter(
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
    setIsReady,
    handleNewItem,
    handleUpdated,
    handleDeleted,
    getById,
    filterByShippingAreasId,
    getItems,
    setItems,
  };

  return {
    states,
    actions,
  };
}
