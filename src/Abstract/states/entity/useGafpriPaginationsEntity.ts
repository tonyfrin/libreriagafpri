import React, { useState } from 'react';
import { SingleValue } from 'react-select';
import type { SelectDefault } from '../../../helpers';
import { UseGafpriDataEntityReturn } from './useGafpriDataEntity';
import {
  EntityAttributes,
  AddressAttributes,
  DocumentIdAttributes,
} from './useGafpriAttributesEntity';

export type UseGafpriPaginationsEntityReturn = {
  states: {
    orderList: 'asc' | 'desc';
    searchTerm: string;
    currentPage: number;
    documentCurrentPage: number;
    searchBy: 'name' | 'lastName' | 'email' | 'phone' | 'digit';
    searchByDefault: SelectDefault;
    searchByOptions: { value: string; label: string }[];
    itemsPerPage: number;
  };
  actions: {
    sortByName: (
      items: EntityAttributes[] | null,
      order: 'asc' | 'desc'
    ) => EntityAttributes[] | null;
    filterByName: (search: string) => EntityAttributes[] | null;
    getPaginated: (
      items:
        | EntityAttributes[]
        | AddressAttributes[]
        | DocumentIdAttributes[]
        | null,
      page: number,
      itemPerPage: number
    ) =>
      | EntityAttributes[]
      | AddressAttributes[]
      | DocumentIdAttributes[]
      | null;
    sortByProperty: (
      items: EntityAttributes[] | null,
      search: 'name' | 'lastName' | 'email' | 'phone' | 'digit',
      order: 'asc' | 'desc'
    ) => EntityAttributes[] | null;
    filterBySearch: (
      search: string,
      searchType: 'name' | 'lastName' | 'email' | 'phone' | 'digit'
    ) => EntityAttributes[] | null;
    changeSearchBy: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    setOrderList: (order: 'asc' | 'desc') => void;
    setSearchTerm: (search: string) => void;
    setCurrentPage: (page: number) => void;
    setDocumentCurrentPage: (page: number) => void;
  };
};

export type UseGafpriPaginationsEntityProps = {
  useData: UseGafpriDataEntityReturn;
};

export const useGafpriPaginationsEntity = ({
  useData,
}: UseGafpriPaginationsEntityProps): UseGafpriPaginationsEntityReturn => {
  const [orderList, setOrderList] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [documentCurrentPage, setDocumentCurrentPage] = useState(1);
  const [searchBy, setSearchBy] = useState<
    'name' | 'lastName' | 'email' | 'phone' | 'digit'
  >('name');
  const [searchByDefault, setSearchByDefault] = useState<SelectDefault>({
    value: 'name',
    label: 'Nombre',
  });
  const searchByOptions = [
    { value: 'name', label: 'Nombre' },
    { value: 'lastName', label: 'Apellido' },
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Teléfono' },
    { value: 'digit', label: 'Documento legal' },
  ];
  const itemsPerPage = 6;

  function sortByName(
    items: EntityAttributes[] | null,
    order: 'asc' | 'desc'
  ): EntityAttributes[] | null {
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

  const filterByName = (search: string): EntityAttributes[] | null => {
    if (useData.states.items && useData.states.items.data.items) {
      return useData.states.items.data.items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return null;
  };

  const getPaginated = (
    items:
      | EntityAttributes[]
      | AddressAttributes[]
      | DocumentIdAttributes[]
      | null,
    page: number,
    itemPerPage: number
  ):
    | EntityAttributes[]
    | AddressAttributes[]
    | DocumentIdAttributes[]
    | null => {
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    if (items) {
      return items.slice(startIndex, endIndex);
    }

    return null;
  };

  function sortByProperty(
    items: EntityAttributes[] | null,
    search: 'name' | 'lastName' | 'email' | 'phone' | 'digit',
    order: 'asc' | 'desc'
  ): EntityAttributes[] | null {
    if (items) {
      return items.slice().sort((a, b) => {
        let aValue: string;
        let bValue: string;

        if (search === 'digit') {
          const aDocumentsWithDigit = a.documentId?.filter((doc) =>
            Object.prototype.hasOwnProperty.call(doc, 'digit')
          );
          const bDocumentsWithDigit = b.documentId?.filter((doc) =>
            Object.prototype.hasOwnProperty.call(doc, 'digit')
          );
          aValue = aDocumentsWithDigit.map((doc) => doc.digit).join(' ');
          bValue = bDocumentsWithDigit.map((doc) => doc.digit).join(' ');
        } else {
          aValue = a[search] ?? '';
          bValue = b[search] ?? '';
        }

        const comparison = aValue.localeCompare(bValue, undefined, {
          sensitivity: 'base',
        });
        return order === 'asc' ? comparison : -comparison;
      });
    }
    return null;
  }

  const filterBySearch = (
    search: string,
    searchType: 'name' | 'lastName' | 'email' | 'phone' | 'digit'
  ): EntityAttributes[] | null => {
    if (useData.states.items.data.items) {
      return useData.states.items.data.items.filter((item) => {
        if (searchType === 'digit') {
          const documentsWithDigit = item.documentId?.filter((doc) =>
            Object.prototype.hasOwnProperty.call(doc, 'digit')
          );
          return documentsWithDigit.some((doc) =>
            doc.digit.toLowerCase().includes(search.toLowerCase())
          );
        }
        const value = item[searchType] as string | null;
        return value
          ? value.toLowerCase().includes(search.toLowerCase())
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
        options.value === 'lastName' ||
        options.value === 'email' ||
        options.value === 'phone' ||
        options.value === 'digit')
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
