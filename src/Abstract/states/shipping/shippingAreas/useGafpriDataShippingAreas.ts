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

interface ShippingAreasData {
  data: {
    items: ShippingAreasAttributes[] | [] | null;
  };
}

type DeletedShippingAreas = {
  itemId: number;
};

type State = {
  items: ShippingAreasData;
  isReady: boolean;
};

type Actions = {
  offItems: () => void;
  handleNewItem: (newItem: ShippingAreasAttributes) => void;
  handleUpdated: (updatedItem: ShippingAreasAttributes) => void;
  handleDeleted: ({ itemId }: DeletedShippingAreas) => void;
  getById: (id: number) => ShippingAreasAttributes | null;
  getOptions: () => SelectDefault[];
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
  const [items, setItems] = useState<ShippingAreasData>({
    data: {
      items: null,
    },
  });

  const onIsReady = (): void => {
    setIsReady(true);
  };

  const notReady = (): void => {
    setIsReady(false);
  };

  // Manejo de la data

  const setData = (newData: ShippingAreasData): void => {
    setItems(newData);
  };

  const onItems = (newData: ShippingAreasData): void => {
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
    if (token) {
      gafpriFetch({
        initMethod: 'GET',
        initRoute: SHIPPING_AREAS_ROUTE,
        initToken: { token },
        functionFetching: notReady,
        functionSuccess: onItems,
      });
    } else {
      notReady();
    }
  };

  const handleNewItem = (newItem: ShippingAreasAttributes): void => {
    setItems((prevState) => {
      const newData = {
        data: {
          items: [...(prevState.data.items || []), newItem],
        },
      };
      return newData;
    });
  };

  const handleUpdated = (updatedItem: ShippingAreasAttributes): void => {
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
      return newData;
    });
  };

  const handleDeleted = ({ itemId }: DeletedShippingAreas): void => {
    setItems((prevState) => {
      const filteredItems =
        prevState.data.items?.filter((item) => `${item.id}` !== `${itemId}`) ||
        [];

      const newData = {
        data: {
          items: filteredItems,
        },
      };
      return newData;
    });
  };

  function getById(id: number): ShippingAreasAttributes | null {
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
  };

  return {
    states,
    actions,
  };
}
