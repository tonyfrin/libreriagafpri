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
    searchByOptions: {
        value: string;
        label: string;
    }[];
};
type Actions = {
    setOrderList: (order: 'asc' | 'desc') => void;
    setSearchTerm: (value: string) => void;
    setCurrentPage: (page: number) => void;
    setItemsPerPage: (itemPerPage: number) => void;
    sortByName: (items: ProductsAttributes[] | null, order: 'asc' | 'desc') => ProductsAttributes[] | null;
    filterByName: (search: string) => ProductsAttributes[] | null;
    getPaginated: (items: ProductsAttributes[] | null, page: number, itemPerPage: number) => ProductsAttributes[] | null;
    sortByProperty: (items: ProductsAttributes[] | null, search: 'sku' | 'name' | 'tags' | 'category', order: 'asc' | 'desc') => ProductsAttributes[] | null;
    filterBySearch: (search: string, searchType: 'sku' | 'name' | 'tags' | 'category') => ProductsAttributes[] | null;
    changeSearchBy: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
};
export type UseGafpriPaginationsProductsReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriPaginationsProductsProps = {
    data: UseGafpriDataProductsReturn;
};
export declare function useGafpriPaginationsProducts({ data, }: UseGafpriPaginationsProductsProps): UseGafpriPaginationsProductsReturn;
export {};
