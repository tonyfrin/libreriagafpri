import React, { useState } from 'react';
import { SitesAttributes } from './useGafpriDataSites';

export type UseGafpriPaginationsSitesReturn = {
  states: {
    orderList: 'asc' | 'desc';
    searchTerm: string;
    currentPage: number;
    itemsPerPage: number;
  };
  actions: {
    sortByName: (
      items: SitesAttributes[] | null,
      order: 'asc' | 'desc'
    ) => SitesAttributes[] | null;
    setOrderList: (order: 'asc' | 'desc') => void;
    setSearchTerm: (value: string) => void;
    filterByName: (
      search: string,
      items: SitesAttributes[] | null
    ) => SitesAttributes[] | null;
    setCurrentPage: (value: number) => void;
    getPaginated: (
      items: SitesAttributes[] | null,
      page: number,
      itemsPerPage: number
    ) => SitesAttributes[] | null;
  };
};

export const useGafpriPaginationsSites =
  (): UseGafpriPaginationsSitesReturn => {
    const [orderList, setOrderList] = useState<'asc' | 'desc'>('asc');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    function sortByName(
      items: SitesAttributes[] | null,
      order: 'asc' | 'desc'
    ): SitesAttributes[] | null {
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
      items: SitesAttributes[] | null
    ): SitesAttributes[] | null => {
      if (items) {
        return items.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );
      }
      return null;
    };

    const getPaginated = (
      items: SitesAttributes[] | null,
      page: number,
      itemPerPage: number
    ): SitesAttributes[] | null => {
      const startIndex = (page - 1) * itemPerPage;
      const endIndex = startIndex + itemPerPage;

      if (items) {
        return items.slice(startIndex, endIndex);
      }

      return null;
    };

    React.useEffect(() => {
      setCurrentPage(1);
    }, [searchTerm]);

    const states = {
      orderList,
      searchTerm,
      currentPage,
      itemsPerPage,
    };

    // Define las acciones necesarias para los atributos de Site
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
  };
