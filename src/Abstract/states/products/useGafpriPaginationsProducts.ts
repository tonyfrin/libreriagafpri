import React, { useState } from 'react';
import type { SingleValue } from 'react-select';
import type { SelectDefault } from '../../../helpers';
import { UseGafpriDataProductsReturn } from './useGafpriDataProducts';
import type { ProductsAttributes } from './useGafpriDataProducts';

type State = {
  orderList: 'asc' | 'desc';

  searchTerm: string;

  currentPage: number;

  itemsPerPage: number;

  searchBy: 'name' | 'sku' | 'tags' | 'category';

  searchByDefault: SelectDefault;

  searchByOptions: { value: string; label: string }[];
};

type Actions = {
  setOrderList: (order: 'asc' | 'desc') => void;

  setSearchTerm: (value: string) => void;

  setCurrentPage: (page: number) => void;

  setItemsPerPage: (itemPerPage: number) => void;

  sortByName: (
    items: ProductsAttributes[] | null,
    order: 'asc' | 'desc'
  ) => ProductsAttributes[] | null;

  filterByName: (search: string) => ProductsAttributes[] | null;

  getPaginated: (
    items: ProductsAttributes[] | null,
    page: number,
    itemPerPage: number
  ) => ProductsAttributes[] | null;

  sortByProperty: (
    items: ProductsAttributes[] | null,
    search: 'sku' | 'name' | 'tags' | 'category',
    order: 'asc' | 'desc'
  ) => ProductsAttributes[] | null;

  filterBySearch: (
    search: string,
    searchType: 'sku' | 'name' | 'tags' | 'category'
  ) => ProductsAttributes[] | null;

  changeSearchBy: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
};

export type UseGafpriPaginationsProductsReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriPaginationsProductsProps = {
  data: UseGafpriDataProductsReturn;
};

export function useGafpriPaginationsProducts({
  data,
}: UseGafpriPaginationsProductsProps): UseGafpriPaginationsProductsReturn {
  const [orderList, setOrderList] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [searchBy, setSearchBy] = useState<
    'name' | 'sku' | 'tags' | 'category'
  >('name');
  const [searchByDefault, setSearchByDefault] = useState<SelectDefault>({
    value: 'name',
    label: 'Nombre',
  });
  const searchByOptions = [
    { value: 'name', label: 'Nombre' },
    { value: 'sku', label: 'Código' },
    { value: 'tags', label: 'Etiqueta' },
    { value: 'category', label: 'Categoría' },
  ];

  function sortByName(
    items: ProductsAttributes[] | null,
    order: 'asc' | 'desc'
  ): ProductsAttributes[] | null {
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

  const filterByName = (search: string): ProductsAttributes[] | null => {
    if (data.states.items.data.items) {
      return data.states.items.data.items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return null;
  };

  const getPaginated = (
    items: ProductsAttributes[] | null,
    page: number,
    itemPerPage: number
  ): ProductsAttributes[] | null => {
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    if (items) {
      return items.slice(startIndex, endIndex);
    }

    return null;
  };

  function sortByProperty(
    items: ProductsAttributes[] | null,
    search: 'sku' | 'name' | 'tags' | 'category',
    order: 'asc' | 'desc'
  ): ProductsAttributes[] | null {
    if (items) {
      return items.slice().sort((a, b) => {
        let aValue: string;
        let bValue: string;

        if (search === 'category') {
          aValue = a.category?.name ?? '';
          bValue = b.category?.name ?? '';
        } else if (search === 'tags') {
          aValue = a.tags?.join('') ?? '';
          bValue = b.tags?.join('') ?? '';
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
    searchType: 'sku' | 'name' | 'tags' | 'category'
  ): ProductsAttributes[] | null => {
    if (data.states.items.data.items) {
      return data.states.items.data.items.filter((item) => {
        if (searchType === 'category') {
          const value = item.category?.name ?? '';
          return value.toLowerCase().includes(search.toLowerCase());
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
        options.value === 'sku' ||
        options.value === 'tags' ||
        options.value === 'category')
        ? options.value
        : 'name';
    const newDefaulValue = {
      label,
      value,
    };
    setSearchByDefault(newDefaulValue);
    setSearchBy(value);
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

    searchBy,

    searchByDefault,

    searchByOptions,
  };

  const actions = {
    setOrderList,

    setSearchTerm,

    setCurrentPage,

    setItemsPerPage,

    sortByName,

    filterByName,

    getPaginated,

    sortByProperty,

    filterBySearch,

    changeSearchBy,
  };

  return {
    states,
    actions,
  };
}
