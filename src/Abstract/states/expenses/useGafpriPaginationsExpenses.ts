import React, { useState } from 'react';
import { SingleValue } from 'react-select';
import type { SelectDefault } from '../../../helpers';
import type {
  UseGafpriDataExpensesReturn,
  ExpensesAttributes,
} from './useGafpriDataExpenses';

export type UseGafpriPaginationsExpensesReturn = {
  states: {
    orderList: 'asc' | 'desc';
    searchTerm: string;
    currentPage: number;
    documentCurrentPage: number;
    searchBy: 'postsId' | 'status' | 'total' | 'name';
    searchByDefault: SelectDefault;
    searchByOptions: SingleValue<{ value: string; label: string }>[];
    itemsPerPage: number;
  };
  actions: {
    sortByName: (
      items: ExpensesAttributes[] | null,
      order: 'asc' | 'desc'
    ) => ExpensesAttributes[] | null;
    filterByName: (search: string) => ExpensesAttributes[] | null;
    getPaginated: (
      items: ExpensesAttributes[] | null,
      page: number,
      itemPerPage: number
    ) => ExpensesAttributes[] | null;
    sortByProperty: (
      items: ExpensesAttributes[] | null,
      search: 'postsId' | 'status' | 'total' | 'name',
      order: 'asc' | 'desc'
    ) => ExpensesAttributes[] | null;
    filterBySearch: (
      search: string,
      searchType: 'postsId' | 'status' | 'total' | 'name'
    ) => ExpensesAttributes[] | null;
    changeSearchBy: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    setOrderList: (order: 'asc' | 'desc') => void;
    setSearchTerm: (search: string) => void;
    setCurrentPage: (page: number) => void;
    setDocumentCurrentPage: (page: number) => void;
  };
};

export type UseGafpriPaginationsExpensesProps = {
  useData: UseGafpriDataExpensesReturn;
};

export const useGafpriPaginationsExpenses = ({
  useData,
}: UseGafpriPaginationsExpensesProps): UseGafpriPaginationsExpensesReturn => {
  const [orderList, setOrderList] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [documentCurrentPage, setDocumentCurrentPage] = useState(1);
  const [searchBy, setSearchBy] = useState<
    'postsId' | 'status' | 'total' | 'name'
  >('name');
  const [searchByDefault, setSearchByDefault] = useState<SelectDefault>({
    value: 'name',
    label: 'Nombre',
  });
  const searchByOptions = [
    { value: 'name', label: 'Nombre' },
    { value: 'postsId', label: 'Pedido' },
    { value: 'status', label: 'Estado' },
    { value: 'total', label: 'Monto' },
  ];
  const itemsPerPage = 6;

  function sortByName(
    items: ExpensesAttributes[] | null,
    order: 'asc' | 'desc'
  ): ExpensesAttributes[] | null {
    if (items) {
      return items.slice().sort((a, b) => {
        const comparison = a.expensesSupplier[0].name.localeCompare(
          b.expensesSupplier[0].name,
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

  const filterByName = (search: string): ExpensesAttributes[] | null => {
    if (useData.states.items && useData.states.items.data.items) {
      return useData.states.items.data.items.filter((item) =>
        item.expensesSupplier[0].name
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }
    return null;
  };

  const getPaginated = (
    items: ExpensesAttributes[] | null,
    page: number,
    itemPerPage: number
  ): ExpensesAttributes[] | null => {
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    if (items) {
      return items.slice(startIndex, endIndex);
    }

    return null;
  };

  function sortByProperty(
    items: ExpensesAttributes[] | null,
    search: 'postsId' | 'status' | 'total' | 'name',
    order: 'asc' | 'desc'
  ): ExpensesAttributes[] | null {
    if (items) {
      return items.slice().sort((a, b) => {
        let aValue: string | number;
        let bValue: string | number;

        switch (search) {
          case 'postsId':
            aValue = a.postsId;
            bValue = b.postsId;
            break;
          case 'status':
            aValue = a.posts.status;
            bValue = a.posts.status;
            break;
          case 'total':
            aValue = a.total;
            bValue = b.total;
            break;
          case 'name':
            aValue = a.expensesSupplier[0].name;
            bValue = b.expensesSupplier[0].name;
            break;
          default:
            // Esto no debería ocurrir si se usa un enum o unión exhaustiva
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
    searchType: 'postsId' | 'status' | 'total' | 'name'
  ): ExpensesAttributes[] | null => {
    if (useData.states.items.data.items) {
      return useData.states.items.data.items.filter((item) => {
        let valueToCheck;

        switch (searchType) {
          case 'postsId':
          case 'total':
          case 'name':
            valueToCheck = item.expensesSupplier[0].name;
            break;
          case 'status':
            valueToCheck = item.posts.status;
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
        options.value === 'status' ||
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
  };

  return {
    states,
    actions,
  };
};
