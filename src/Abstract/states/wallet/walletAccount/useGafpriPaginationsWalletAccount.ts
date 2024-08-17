import React, { useState } from 'react';
import {
  WalletAccountAttributes,
  UseGafpriDataWalletAccountReturn,
} from './useGafpriDataWalletAccount';

type State = {
  orderList: 'asc' | 'desc';

  searchTerm: string;

  currentPage: number;

  itemsPerPage: number;
};

type Actions = {
  sortByName: (
    items: WalletAccountAttributes[] | null,
    order: 'asc' | 'desc'
  ) => WalletAccountAttributes[] | null;

  setOrderList: (order: 'asc' | 'desc') => void;

  setSearchTerm: (value: string) => void;

  filterByName: (search: string) => WalletAccountAttributes[] | null;

  setCurrentPage: (value: number) => void;

  getPaginated: (
    items: WalletAccountAttributes[] | null,
    page: number,
    itemsPerPage: number
  ) => WalletAccountAttributes[] | null;
};

export type UseGafpriPaginationsWalletAccountReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriPaginationsWalletAccountProps = {
  data: UseGafpriDataWalletAccountReturn;
};

export function useGafpriPaginationsWalletAccount({
  data,
}: UseGafpriPaginationsWalletAccountProps): UseGafpriPaginationsWalletAccountReturn {
  const [orderList, setOrderList] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  function sortByName(
    itemStorages: WalletAccountAttributes[] | null,
    order: 'asc' | 'desc'
  ): WalletAccountAttributes[] | null {
    if (itemStorages) {
      return itemStorages.slice().sort((a, b) => {
        const comparison = a.name.localeCompare(b.name, undefined, {
          sensitivity: 'base',
        });
        return order === 'asc' ? comparison : -comparison;
      });
    }
    return null;
  }

  const filterByName = (search: string): WalletAccountAttributes[] | null => {
    if (data.states.items.data.items) {
      return data.states.items.data.items.filter((storage) =>
        storage.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return null;
  };

  const getPaginated = (
    items: WalletAccountAttributes[] | null,
    page: number,
    itemPerPage: number
  ): WalletAccountAttributes[] | null => {
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
