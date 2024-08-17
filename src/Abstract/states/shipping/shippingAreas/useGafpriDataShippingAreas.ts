import React, { useState } from 'react';
import { getItem, saveItem } from '../../../../Context';
import {
  getLastEntryDateAndCount,
  gafpriFetch,
  SelectDefault,
} from '../../../../helpers';
import {
  SHIPPING_AREAS_STORAGE,
  SHIPPING_AREAS_ROUTE,
} from '../../../../constants';
import { ShippingMethodsAttributes } from '../shippingMethods';

export interface ShippingAreasAttributes {
  id: number;
  name: string;
  region: string[];
  shippingMethods: ShippingMethodsAttributes[];
  createdAt: Date;
  modifiedAt: Date;
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
      items: getItem(SHIPPING_AREAS_STORAGE, null),
    },
  });

  const onIsReady = (): void => {
    setIsReady(true);
  };

  const notReady = (): void => {
    setIsReady(false);
  };

  // Manejo de la data

  const getLastItem: ShippingAreasAttributes | null = items.data?.items
    ? items.data.items.sort(
        (a, b) =>
          new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime()
      )[0]
    : null;

  const setDataStorage = (newData: ShippingAreasData): void => {
    saveItem(SHIPPING_AREAS_STORAGE, newData.data.items);
  };

  const setData = (newData: ShippingAreasData): void => {
    setItems(newData);
    setDataStorage(newData);
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
    const lastEntryDateAndCount = await getLastEntryDateAndCount(
      SHIPPING_AREAS_ROUTE
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
          initRoute: SHIPPING_AREAS_ROUTE,
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

  const handleNewItem = (newItem: ShippingAreasAttributes): void => {
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
      setDataStorage(newData);
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

      setDataStorage(newData);
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
    getOptions,
  };

  return {
    states,
    actions,
  };
}
