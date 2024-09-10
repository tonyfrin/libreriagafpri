import { useState } from 'react';
import { gafpriFetch, SelectDefault } from '../../../../helpers';
import { SHIPPING_AREAS_ROUTE } from '../../../../constants';

export interface ShippingAreasAttributes {
  id: number;
  name: string;
  postalCodes: string[];
  cities: string[];
  states: string[];
  countries: string[];
}

type DeletedShippingAreas = {
  itemId: number;
};

type State = {
  items: ShippingAreasAttributes[] | null;
  isReady: boolean;
};

type Actions = {
  offItems: () => void;
  handleNewItem: (newItem: ShippingAreasAttributes) => void;
  handleUpdated: (updatedItem: ShippingAreasAttributes) => void;
  handleDeleted: ({ itemId }: DeletedShippingAreas) => void;
  getById: (id: number) => ShippingAreasAttributes | null;
  getOptions: () => SelectDefault[];
  /* eslint-disable @typescript-eslint/no-explicit-any */
  getItems: () => Promise<any>;
  /* eslint-enable @typescript-eslint/no-explicit-any */
  setItems: (value: ShippingAreasAttributes[] | null) => void;
  setIsReady: (value: boolean) => void;
};

export type UseGafpriDataShippingAreasReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriDataShippingAreasProps = {
  token: string | null;
};

export function useGafpriDataShippingAreas({
  token,
}: UseGafpriDataShippingAreasProps): UseGafpriDataShippingAreasReturn {
  const [isReady, setIsReady] = useState(false);
  const [items, setItems] = useState<ShippingAreasAttributes[] | null>(null);

  const notReady = (): void => {
    setIsReady(false);
  };

  // Manejo de la dat

  const offItems = (): void => {
    setItems(null);
    notReady();
  };

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const getItems = async (): Promise<any> => {
    if (token) {
      console.log('entré a get items');
      const data = await gafpriFetch({
        initMethod: 'GET',
        initRoute: SHIPPING_AREAS_ROUTE,
        initToken: { token },
      });
      console.log('data shiping', data);
      return data;
    }
    return null;
  };
  /* eslint-enable @typescript-eslint/no-explicit-any */

  const handleNewItem = (newItem: ShippingAreasAttributes): void => {
    setItems((prevState) => {
      const newData = [...(prevState || []), newItem];
      return newData;
    });
  };

  const handleUpdated = (updatedItem: ShippingAreasAttributes): void => {
    setItems((prevState) => {
      const updatedItems =
        prevState?.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        ) || [];
      const newData = updatedItems;
      return newData;
    });
  };

  const handleDeleted = ({ itemId }: DeletedShippingAreas): void => {
    setItems((prevState) => {
      const filteredItems =
        prevState?.filter((item) => `${item.id}` !== `${itemId}`) || [];

      const newData = filteredItems;
      return newData;
    });
  };

  function getById(id: number): ShippingAreasAttributes | null {
    return items?.find((item) => item.id === id) || null;
  }

  function getOptions(): SelectDefault[] {
    const options: SelectDefault[] = [];

    items?.forEach((item) => {
      options.push({ label: item.name, value: `${item.id}` });
    });

    return options;
  }

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
    getItems,
    setItems,
    setIsReady,
  };

  return {
    states,
    actions,
  };
}
