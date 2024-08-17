import React, { useState } from 'react';
import { SingleValue } from 'react-select';
import type { SelectDefault } from '../../../helpers';
import type {
  UseGafpriDataOrderReturnReturn,
  OrderReturnAttributes,
} from './useGafpriDataOrderReturn';

export type UseGafpriPaginationsOrderReturnReturn = {
  states: {
    orderList: 'asc' | 'desc';
    searchTerm: string;
    currentPage: number;
    documentCurrentPage: number;
    searchBy: 'postsId' | 'total' | 'name';
    searchByDefault: SelectDefault;
    searchByOptions: SingleValue<{ value: string; label: string }>[];
    itemsPerPage: number;
  };
  actions: {
    sortByName: (
      items: OrderReturnAttributes[] | null,
      order: 'asc' | 'desc'
    ) => OrderReturnAttributes[] | null;
    filterByName: (search: string) => OrderReturnAttributes[] | null;
    getPaginated: (
      items: OrderReturnAttributes[] | null,
      page: number,
      itemPerPage: number
    ) => OrderReturnAttributes[] | null;
    sortByProperty: (
      items: OrderReturnAttributes[] | null,
      search: 'postsId' | 'total' | 'name',
      order: 'asc' | 'desc'
    ) => OrderReturnAttributes[] | null;
    filterBySearch: (
      search: string,
      searchType: 'postsId' | 'total' | 'name'
    ) => OrderReturnAttributes[] | null;
    changeSearchBy: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    setOrderList: (order: 'asc' | 'desc') => void;
    setSearchTerm: (search: string) => void;
    setCurrentPage: (page: number) => void;
    setDocumentCurrentPage: (page: number) => void;
    sortById: (
      items: OrderReturnAttributes[] | null,
      order: 'asc' | 'desc'
    ) => OrderReturnAttributes[] | null;
  };
};

export type UseGafpriPaginationsOrderReturnProps = {
  useData: UseGafpriDataOrderReturnReturn;
};

export const useGafpriPaginationsOrderReturn = ({
  useData,
}: UseGafpriPaginationsOrderReturnProps): UseGafpriPaginationsOrderReturnReturn => {
  const [orderList, setOrderList] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [documentCurrentPage, setDocumentCurrentPage] = useState(1);
  const [searchBy, setSearchBy] = useState<'postsId' | 'total' | 'name'>(
    'name'
  );
  const [searchByDefault, setSearchByDefault] = useState<SelectDefault>({
    value: 'name',
    label: 'Nombre',
  });
  const searchByOptions = [
    { value: 'name', label: 'Nombre' },
    { value: 'postsId', label: 'Pedido' },
    { value: 'total', label: 'Monto' },
  ];
  const itemsPerPage = 6;

  function sortByName(
    items: OrderReturnAttributes[] | null,
    order: 'asc' | 'desc'
  ): OrderReturnAttributes[] | null {
    if (items) {
      return items.slice().sort((a, b) => {
        const comparison = a.order.orderCustomer[0].name.localeCompare(
          b.order.orderCustomer[0].name,
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

  function sortById(
    items: OrderReturnAttributes[] | null,
    order: 'asc' | 'desc'
  ): OrderReturnAttributes[] | null {
    if (items) {
      return items.slice().sort((a, b) => {
        const idA = a.postsId || 0;
        const idB = b.postsId || 0;

        const comparison = idA - idB;
        return order === 'asc' ? comparison : -comparison;
      });
    }
    return null;
  }

  const filterByName = (search: string): OrderReturnAttributes[] | null => {
    if (useData.states.items && useData.states.items.data.items) {
      return useData.states.items.data.items.filter((item) =>
        item.order.orderCustomer[0].name
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }
    return null;
  };

  const getPaginated = (
    items: OrderReturnAttributes[] | null,
    page: number,
    itemPerPage: number
  ): OrderReturnAttributes[] | null => {
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    if (items) {
      return items.slice(startIndex, endIndex);
    }

    return null;
  };

  function sortByProperty(
    items: OrderReturnAttributes[] | null,
    search: 'postsId' | 'total' | 'name',
    order: 'asc' | 'desc'
  ): OrderReturnAttributes[] | null {
    if (items) {
      return items.slice().sort((a, b) => {
        let aValue: string | number;
        let bValue: string | number;

        switch (search) {
          case 'postsId':
            aValue = a.postsId;
            bValue = b.postsId;
            break;
          case 'total':
            aValue = a.total;
            bValue = b.total;
            break;
          case 'name':
            aValue = a.order.orderCustomer[0].name;
            bValue = b.order.orderCustomer[0].name;
            break;
          default:
            aValue = '';
            bValue = '';
            break;
        }

        const comparison =
          typeof aValue === 'string'
            ? aValue.localeCompare(bValue as string, undefined, {
                sensitivity: 'base',
              })
            : (aValue as number) - (bValue as number);
        return order === 'asc' ? comparison : -comparison;
      });
    }
    return null;
  }

  const filterBySearch = (
    search: string,
    searchType: 'postsId' | 'total' | 'name'
  ): OrderReturnAttributes[] | null => {
    if (useData.states.items.data.items) {
      return useData.states.items.data.items.filter((item) => {
        let valueToCheck;

        switch (searchType) {
          case 'postsId':
          case 'total':
          case 'name':
            valueToCheck = item.order.orderCustomer[0].name;
            break;
          default:
            return false;
        }

        return valueToCheck
          ? valueToCheck.toLowerCase().includes(search.toLowerCase())
          : false;
      });
    }
    return null;
  };

  const changeSearchBy = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    const label = options?.label ? options.label : 'Nombre';
    const value =
      options?.value &&
      (options.value === 'name' ||
        options.value === 'postsId' ||
        options.value === 'total')
        ? options.value
        : 'name';
    const newDefaulValue = {
      label,
      value,
    };
    setSearchByDefault(newDefaulValue);
    setSearchBy(value);
  };

  React.useEffect(() => {
    setCurrentPage(1);
    setDocumentCurrentPage(1);
  }, [searchTerm]);

  const states = {
    orderList,
    searchTerm,
    currentPage,
    documentCurrentPage,
    searchBy,
    searchByDefault,
    searchByOptions,
    itemsPerPage,
  };

  const actions = {
    sortByName,
    filterByName,
    getPaginated,
    sortByProperty,
    filterBySearch,
    changeSearchBy,
    setOrderList,
    setSearchTerm,
    setCurrentPage,
    setDocumentCurrentPage,
    sortById,
  };

  return {
    states,
    actions,
  };
};
