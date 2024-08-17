import React, { useState } from 'react';
import type { ShippingMethodsAttributes } from './useGafpriDataShippingMethods';

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

  sortByName: (
    items: ShippingMethodsAttributes[] | null,
    order: 'asc' | 'desc'
  ) => ShippingMethodsAttributes[] | null;

  filterByName: (
    search: string,
    currentItems: ShippingMethodsAttributes[] | null
  ) => ShippingMethodsAttributes[] | null;

  getPaginated: (
    items: ShippingMethodsAttributes[] | null,
    page: number,
    itemPerPage: number
  ) => ShippingMethodsAttributes[] | null;
};

export type UseGafpriPaginationsShippingMethodsReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriPaginationsShippingMethods(): UseGafpriPaginationsShippingMethodsReturn {
  const [orderList, setOrderList] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  function sortByName(
    items: ShippingMethodsAttributes[] | null,
    order: 'asc' | 'desc'
  ): ShippingMethodsAttributes[] | null {
    if (items) {
      return items.slice().sort((a, b) => {
        const comparison = a.name.localeCompare(b.name, undefined, {
          sensitivity: 'base',
        });
        return order === 'asc' ? comparison : -comparison;
      });
    }
    return null;
  }

  const filterByName = (
    search: string,
    currentItems: ShippingMethodsAttributes[] | null
  ): ShippingMethodsAttributes[] | null => {
    if (currentItems) {
      return currentItems.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return null;
  };

  const getPaginated = (
    items: ShippingMethodsAttributes[] | null,
    page: number,
    itemPerPage: number
  ): ShippingMethodsAttributes[] | null => {
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

    sortByName,

    filterByName,

    getPaginated,
  };

  return {
    states,
    actions,
  };
}
