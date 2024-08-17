import React, { useState } from 'react';
import {
  UseGafpriDataProjectsReturn,
  ProjectsAttributes,
} from './useGafpriDataProjects';

type State = {
  orderList: 'asc' | 'desc';

  searchTerm: string;

  currentPage: number;

  itemsPerPage: number;
};

type Actions = {
  sortByName: (
    items: ProjectsAttributes[] | null,
    order: 'asc' | 'desc'
  ) => ProjectsAttributes[] | null;

  setOrderList: (order: 'asc' | 'desc') => void;

  setSearchTerm: (value: string) => void;

  filterByName: (search: string) => ProjectsAttributes[] | null;

  setCurrentPage: (value: number) => void;

  getPaginated: (
    items: ProjectsAttributes[] | null,
    page: number,
    itemsPerPage: number
  ) => ProjectsAttributes[] | null;
};

export type UseGafpriPaginationsProjectsReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriPaginationsProjectsProps = {
  data: UseGafpriDataProjectsReturn;
};

export function useGafpriPaginationsProjects({
  data,
}: UseGafpriPaginationsProjectsProps): UseGafpriPaginationsProjectsReturn {
  const [orderList, setOrderList] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  function sortByName(
    items: ProjectsAttributes[] | null,
    order: 'asc' | 'desc'
  ): ProjectsAttributes[] | null {
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

  const filterByName = (search: string): ProjectsAttributes[] | null => {
    if (data.states.items && data.states.items.data.items) {
      return data.states.items.data.items.filter((project) =>
        project.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return null;
  };

  const getPaginated = (
    items: ProjectsAttributes[] | null,
    page: number,
    itemPerPage: number
  ): ProjectsAttributes[] | null => {
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
