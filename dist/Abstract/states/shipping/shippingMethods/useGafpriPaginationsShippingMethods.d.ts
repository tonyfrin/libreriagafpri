import type { ShippingMethodsAttributes } from './useGafpriDataShippingMethods';
type State = {
    orderList: 'asc' | 'desc';
    searchTerm: string;
    currentPage: number;
    itemsPerPage: number;
};
type Actions = {
    setOrderList: (order: 'asc' | 'desc') => void;
    setSearchTerm: (value: string) => void;
    setCurrentPage: (page: number) => void;
    setItemsPerPage: (itemPerPage: number) => void;
    sortByName: (items: ShippingMethodsAttributes[] | null, order: 'asc' | 'desc') => ShippingMethodsAttributes[] | null;
    filterByName: (search: string, currentItems: ShippingMethodsAttributes[] | null) => ShippingMethodsAttributes[] | null;
    getPaginated: (items: ShippingMethodsAttributes[] | null, page: number, itemPerPage: number) => ShippingMethodsAttributes[] | null;
};
export type UseGafpriPaginationsShippingMethodsReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriPaginationsShippingMethods(): UseGafpriPaginationsShippingMethodsReturn;
export {};
