import React, { useState } from 'react';
import { getItem, saveItem } from '../../../../Context';
import { getLastEntryDateAndCount, gafpriFetch } from '../../../../helpers';
import { TAX_RATES_ROUTE, TAX_RATES_STORAGE } from '../../../../constants';

export interface TaxRatesAttributes {
  id: number;
  taxClassesId: number;
  rate: number;
  city: string;
  state: string;
  country: string;
  postCode?: string;
  createdAt: Date;
  modifiedAt: Date;
}

interface TaxRatesData {
  data: {
    items: TaxRatesAttributes[] | [] | null;
  };
}

type DeletedTaxRates = {
  itemId: number;
};

type State = {
  items: TaxRatesData;
  isReady: boolean;
};

type Actions = {
  offItems: () => void;
  handleNewItem: (newItem: TaxRatesAttributes) => void;
  handleUpdated: (updatedItem: TaxRatesAttributes) => void;
  handleDeleted: ({ itemId }: DeletedTaxRates) => void;
  getById: (id: number) => TaxRatesAttributes | null;
  filterByTaxClassesId: (taxClassesId: number) => TaxRatesAttributes[];
};

export type UseGafpriDataTaxRatesReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriDataTaxRatesProps = {
  token: string | null;
};

export function useGafpriDataTaxRates({
  token,
}: UseGafpriDataTaxRatesProps): UseGafpriDataTaxRatesReturn {
  const [isReady, setIsReady] = useState(false);
  const [items, setItems] = useState<TaxRatesData>({
    data: {
      items: getItem(TAX_RATES_STORAGE, null),
    },
  });

  const onIsReady = (): void => {
    setIsReady(true);
  };

  const notReady = (): void => {
    setIsReady(false);
  };

  // Manejo de la data

  const getLastItem: TaxRatesAttributes | null = items.data?.items
    ? items.data.items.sort(
        (a, b) =>
          new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime()
      )[0]
    : null;

  const setDataStorage = (newData: TaxRatesData): void => {
    saveItem(TAX_RATES_STORAGE, newData.data.items);
  };

  const setData = (newData: TaxRatesData): void => {
    setItems(newData);
    setDataStorage(newData);
  };

  const onItems = (newData: TaxRatesData): void => {
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
      TAX_RATES_ROUTE
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
          initRoute: TAX_RATES_ROUTE,
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

  const handleNewItem = (newItem: TaxRatesAttributes): void => {
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

  const handleUpdated = (updatedItem: TaxRatesAttributes): void => {
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

  const handleDeleted = ({ itemId }: DeletedTaxRates): void => {
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

  function getById(id: number): TaxRatesAttributes | null {
    return items.data.items?.find((item) => item.id === id) || null;
  }

  function filterByTaxClassesId(taxClassesId: number): TaxRatesAttributes[] {
    return (
      items.data.items?.filter(
        (method) => `${method.taxClassesId}` === `${taxClassesId}`
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
    filterByTaxClassesId,
  };

  return {
    states,
    actions,
  };
}
