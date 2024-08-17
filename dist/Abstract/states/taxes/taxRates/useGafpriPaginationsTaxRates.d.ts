import type { TaxRatesAttributes } from './useGafpriDataTaxRates';
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
    sortByCity: (items: TaxRatesAttributes[] | null, order: 'asc' | 'desc') => TaxRatesAttributes[] | null;
    filterByCity: (search: string, currentItems: TaxRatesAttributes[] | null) => TaxRatesAttributes[] | null;
    getPaginated: (items: TaxRatesAttributes[] | null, page: number, itemPerPage: number) => TaxRatesAttributes[] | null;
};
export type UseGafpriPaginationsTaxRatesReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriPaginationsTaxRates(): UseGafpriPaginationsTaxRatesReturn;
export {};
