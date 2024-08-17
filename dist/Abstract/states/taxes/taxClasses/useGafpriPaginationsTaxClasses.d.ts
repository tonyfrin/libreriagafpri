import { UseGafpriDataTaxClassesReturn } from './useGafpriDataTaxClasses';
import type { TaxClassesAttributes } from './useGafpriDataTaxClasses';
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
    sortByName: (items: TaxClassesAttributes[] | null, order: 'asc' | 'desc') => TaxClassesAttributes[] | null;
    filterByName: (search: string) => TaxClassesAttributes[] | null;
    getPaginated: (items: TaxClassesAttributes[] | null, page: number, itemPerPage: number) => TaxClassesAttributes[] | null;
};
export type UseGafpriPaginationsTaxClassesReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriPaginationsTaxClassesProps = {
    data: UseGafpriDataTaxClassesReturn;
};
export declare function useGafpriPaginationsTaxClasses({ data, }: UseGafpriPaginationsTaxClassesProps): UseGafpriPaginationsTaxClassesReturn;
export {};
