import { SingleValue } from 'react-select';
import type { SelectDefault } from '../../../helpers';
import type { UseGafpriDataOrderReturn, OrderAttributes } from './useGafpriDataOrder';
export type UseGafpriPaginationsOrderReturn = {
    states: {
        orderList: 'asc' | 'desc';
        searchTerm: string;
        currentPage: number;
        documentCurrentPage: number;
        searchBy: 'postsId' | 'status' | 'total' | 'name';
        searchByDefault: SelectDefault;
        searchByOptions: SingleValue<{
            value: string;
            label: string;
        }>[];
        itemsPerPage: number;
    };
    actions: {
        sortByName: (items: OrderAttributes[] | null, order: 'asc' | 'desc') => OrderAttributes[] | null;
        filterByName: (search: string) => OrderAttributes[] | null;
        getPaginated: (items: OrderAttributes[] | null, page: number, itemPerPage: number) => OrderAttributes[] | null;
        sortByProperty: (items: OrderAttributes[] | null, search: 'postsId' | 'status' | 'total' | 'name', order: 'asc' | 'desc') => OrderAttributes[] | null;
        filterBySearch: (search: string, searchType: 'postsId' | 'status' | 'total' | 'name') => OrderAttributes[] | null;
        changeSearchBy: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        setOrderList: (order: 'asc' | 'desc') => void;
        setSearchTerm: (search: string) => void;
        setCurrentPage: (page: number) => void;
        setDocumentCurrentPage: (page: number) => void;
        sortById: (items: OrderAttributes[] | null, order: 'asc' | 'desc') => OrderAttributes[] | null;
    };
};
export type UseGafpriPaginationsOrderProps = {
    useData: UseGafpriDataOrderReturn;
};
export declare const useGafpriPaginationsOrder: ({ useData, }: UseGafpriPaginationsOrderProps) => UseGafpriPaginationsOrderReturn;
