import React, { useState } from 'react';
import {
  StorageAttributes,
  UseGafpriDataStorageReturn,
} from './useGafpriDataStorage';

type State = {
  orderList: 'asc' | 'desc';

  searchTerm: string;

  currentPage: number;

  itemsPerPage: number;
};

type Actions = {
  sortByName: (
    storages: StorageAttributes[] | null,
    order: 'asc' | 'desc'
  ) => StorageAttributes[] | null;

  setOrderList: (order: 'asc' | 'desc') => void;

  setSearchTerm: (value: string) => void;

  filterByName: (search: string) => StorageAttributes[] | null;

  setCurrentPage: (value: number) => void;

  getPaginated: (
    itemStorages: StorageAttributes[] | null,
    page: number,
    itemsPerPage: number
  ) => StorageAttributes[] | null;
};

export type UseGafpriPaginationsStorageReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriPaginationsStorageProps = {
  data: UseGafpriDataStorageReturn;
};

export function useGafpriPaginationsStorage({
  data,
}: UseGafpriPaginationsStorageProps): UseGafpriPaginationsStorageReturn {
  const [orderList, setOrderList] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  function sortByName(
    itemStorages: StorageAttributes[] | null,
    order: 'asc' | 'desc'
  ): StorageAttributes[] | null {
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

  const filterByName = (search: string): StorageAttributes[] | null => {
    if (data.states.items.data.items) {
      return data.states.items.data.items.filter((storage) =>
        storage.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return null;
  };

  const getPaginated = (
    itemStorages: StorageAttributes[] | null,
    page: number,
    itemPerPage: number
  ): StorageAttributes[] | null => {
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    if (itemStorages) {
      return itemStorages.slice(startIndex, endIndex);
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
