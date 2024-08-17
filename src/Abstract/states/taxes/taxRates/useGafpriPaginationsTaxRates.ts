import React, { useState } from 'react';
import type { TaxRatesAttributes } from './useGafpriDataTaxRates';

type State = {
  orderList: 'asc' | 'desc';

  searchTerm: string;

  currentPage: number;

  itemsPerPage: number;
};

type Actions = {
  setOrderList: (order: 'asc' | 'desc') => void;

  setSearchTerm: (value: string) => void;

  setCurrentPage: (page: number) => void;

  setItemsPerPage: (itemPerPage: number) => void;

  sortByCity: (
    items: TaxRatesAttributes[] | null,
    order: 'asc' | 'desc'
  ) => TaxRatesAttributes[] | null;

  filterByCity: (
    search: string,
    currentItems: TaxRatesAttributes[] | null
  ) => TaxRatesAttributes[] | null;

  getPaginated: (
    items: TaxRatesAttributes[] | null,
    page: number,
    itemPerPage: number
  ) => TaxRatesAttributes[] | null;
};

export type UseGafpriPaginationsTaxRatesReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriPaginationsTaxRates(): UseGafpriPaginationsTaxRatesReturn {
  const [orderList, setOrderList] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  function sortByCity(
    items: TaxRatesAttributes[] | null,
    order: 'asc' | 'desc'
  ): TaxRatesAttributes[] | null {
    if (items) {
      return items.slice().sort((a, b) => {
        const comparison = a.city.localeCompare(b.city, undefined, {
          sensitivity: 'base',
        });
        return order === 'asc' ? comparison : -comparison;
      });
    }
    return null;
  }

  const filterByCity = (
    search: string,
    currentItems: TaxRatesAttributes[] | null
  ): TaxRatesAttributes[] | null => {
    if (currentItems) {
      return currentItems.filter((item) =>
        item.city.toLowerCase().includes(search.toLowerCase())
      );
    }
    return null;
  };

  const getPaginated = (
    items: TaxRatesAttributes[] | null,
    page: number,
    itemPerPage: number
  ): TaxRatesAttributes[] | null => {
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    if (items) {
      return items.slice(startIndex, endIndex);
    }

    return null;
  };

  /**
   * Effects
   *
   *
   */

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  /**
   * Export
   *
   *
   */
  const states = {
    orderList,

    searchTerm,

    currentPage,

    itemsPerPage,
  };

  const actions = {
    setOrderList,

    setSearchTerm,

    setCurrentPage,

    setItemsPerPage,

    sortByCity,

    filterByCity,

    getPaginated,
  };

  return {
    states,
    actions,
  };
}
