import React, { useState } from 'react';
import {
  AccountsReceivableAttributes,
  UseGafpriDataAccountsReceivableReturn,
} from './useGafpriDataAccountsReceivable';

type State = {
  orderList: 'asc' | 'desc';

  searchTerm: string;

  currentPage: number;

  itemsPerPage: number;
};

type Actions = {
  sortByName: (
    items: AccountsReceivableAttributes[] | null,
    order: 'asc' | 'desc'
  ) => AccountsReceivableAttributes[] | null;

  setOrderList: (order: 'asc' | 'desc') => void;

  setSearchTerm: (value: string) => void;

  filterByName: (search: string) => AccountsReceivableAttributes[] | null;

  setCurrentPage: (value: number) => void;

  getPaginated: (
    items: AccountsReceivableAttributes[] | null,
    page: number,
    itemsPerPage: number
  ) => AccountsReceivableAttributes[] | null;
};

export type UseGafpriPaginationsAccountsReceivableReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriPaginationsAccountsReceivableProps = {
  data: UseGafpriDataAccountsReceivableReturn;
};

export function useGafpriPaginationsAccountsReceivable({
  data,
}: UseGafpriPaginationsAccountsReceivableProps): UseGafpriPaginationsAccountsReceivableReturn {
  const [orderList, setOrderList] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  function sortByName(
    itemStorages: AccountsReceivableAttributes[] | null,
    order: 'asc' | 'desc'
  ): AccountsReceivableAttributes[] | null {
    if (itemStorages) {
      return itemStorages.slice().sort((a, b) => {
        const comparison = a.entity.name.localeCompare(
          b.entity.name,
          undefined,
          {
            sensitivity: 'base',
          }
        );
        return order === 'asc' ? comparison : -comparison;
      });
    }
    return null;
  }

  const filterByName = (
    search: string
  ): AccountsReceivableAttributes[] | null => {
    if (data.states.items.data.items) {
      return data.states.items.data.items.filter((storage) =>
        storage.entity.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return null;
  };

  const getPaginated = (
    items: AccountsReceivableAttributes[] | null,
    page: number,
    itemPerPage: number
  ): AccountsReceivableAttributes[] | null => {
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
