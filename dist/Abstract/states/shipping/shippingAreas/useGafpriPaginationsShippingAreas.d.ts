import type { ShippingAreasAttributes } from './useGafpriDataShippingAreas';
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
    sortByName: (items: ShippingAreasAttributes[] | null, order: 'asc' | 'desc') => ShippingAreasAttributes[] | null;
    filterByName: (items: ShippingAreasAttributes[] | null, search: string) => ShippingAreasAttributes[] | null;
    getPaginated: (items: ShippingAreasAttributes[] | null, page: number, itemPerPage: number) => ShippingAreasAttributes[] | null;
};
export type UseGafpriPaginationsShippingAreasReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriPaginationsShippingAreas(): UseGafpriPaginationsShippingAreasReturn;
export {};
