import React, { useState } from 'react';
import { UseGafpriDataTaxClassesReturn } from './useGafpriDataTaxClasses';
import type { TaxClassesAttributes } from './useGafpriDataTaxClasses';

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
    items: TaxClassesAttributes[] | null,
    order: 'asc' | 'desc'
  ) => TaxClassesAttributes[] | null;

  filterByName: (search: string) => TaxClassesAttributes[] | null;

  getPaginated: (
    items: TaxClassesAttributes[] | null,
    page: number,
    itemPerPage: number
  ) => TaxClassesAttributes[] | null;
};

export type UseGafpriPaginationsTaxClassesReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriPaginationsTaxClassesProps = {
  data: UseGafpriDataTaxClassesReturn;
};

export function useGafpriPaginationsTaxClasses({
  data,
}: UseGafpriPaginationsTaxClassesProps): UseGafpriPaginationsTaxClassesReturn {
  const [orderList, setOrderList] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  function sortByName(
    items: TaxClassesAttributes[] | null,
    order: 'asc' | 'desc'
  ): TaxClassesAttributes[] | null {
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

  const filterByName = (search: string): TaxClassesAttributes[] | null => {
    if (data.states.items.data.items) {
      return data.states.items.data.items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return null;
  };

  const getPaginated = (
    items: TaxClassesAttributes[] | null,
    page: number,
    itemPerPage: number
  ): TaxClassesAttributes[] | null => {
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
