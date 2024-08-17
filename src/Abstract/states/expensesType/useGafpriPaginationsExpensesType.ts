import React, { useState } from 'react';
import { ExpensesTypeAttributes } from './useGafpriDataExpensesType';

type State = {
  orderList: 'asc' | 'desc';

  searchTerm: string;

  currentPage: number;

  itemsPerPage: number;
};

type Actions = {
  sortByName: (
    items: ExpensesTypeAttributes[] | null,
    order: 'asc' | 'desc'
  ) => ExpensesTypeAttributes[] | null;

  setOrderList: (order: 'asc' | 'desc') => void;

  setSearchTerm: (value: string) => void;

  filterByName: (
    items: ExpensesTypeAttributes[] | null,
    search: string
  ) => ExpensesTypeAttributes[] | null;

  setCurrentPage: (value: number) => void;

  getPaginated: (
    items: ExpensesTypeAttributes[] | null,
    page: number,
    itemsPerPage: number
  ) => ExpensesTypeAttributes[] | null;
};

export type UseGafpriPaginationsExpensesTypeReturn = {
  states: State;
  actions: Actions;
};
export function useGafpriPaginationsExpensesType(): UseGafpriPaginationsExpensesTypeReturn {
  const [orderList, setOrderList] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  function sortByName(
    items: ExpensesTypeAttributes[] | null,
    order: 'asc' | 'desc'
  ): ExpensesTypeAttributes[] | null {
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
    items: ExpensesTypeAttributes[] | null,
    search: string
  ): ExpensesTypeAttributes[] | null => {
    if (items) {
      return items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return null;
  };

  const getPaginated = (
    items: ExpensesTypeAttributes[] | null,
    page: number,
    itemPerPage: number
  ): ExpensesTypeAttributes[] | null => {
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
    sortByName,
    setOrderList,
    setSearchTerm,
    filterByName,
    setCurrentPage,
    getPaginated,
  };

  return {
    states,
    actions,
  };
}
