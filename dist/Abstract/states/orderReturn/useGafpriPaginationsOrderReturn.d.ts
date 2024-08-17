import { SingleValue } from 'react-select';
import type { SelectDefault } from '../../../helpers';
import type { UseGafpriDataOrderReturnReturn, OrderReturnAttributes } from './useGafpriDataOrderReturn';
export type UseGafpriPaginationsOrderReturnReturn = {
    states: {
        orderList: 'asc' | 'desc';
        searchTerm: string;
        currentPage: number;
        documentCurrentPage: number;
        searchBy: 'postsId' | 'total' | 'name';
        searchByDefault: SelectDefault;
        searchByOptions: SingleValue<{
            value: string;
            label: string;
        }>[];
        itemsPerPage: number;
    };
    actions: {
        sortByName: (items: OrderReturnAttributes[] | null, order: 'asc' | 'desc') => OrderReturnAttributes[] | null;
        filterByName: (search: string) => OrderReturnAttributes[] | null;
        getPaginated: (items: OrderReturnAttributes[] | null, page: number, itemPerPage: number) => OrderReturnAttributes[] | null;
        sortByProperty: (items: OrderReturnAttributes[] | null, search: 'postsId' | 'total' | 'name', order: 'asc' | 'desc') => OrderReturnAttributes[] | null;
        filterBySearch: (search: string, searchType: 'postsId' | 'total' | 'name') => OrderReturnAttributes[] | null;
        changeSearchBy: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        setOrderList: (order: 'asc' | 'desc') => void;
        setSearchTerm: (search: string) => void;
        setCurrentPage: (page: number) => void;
        setDocumentCurrentPage: (page: number) => void;
        sortById: (items: OrderReturnAttributes[] | null, order: 'asc' | 'desc') => OrderReturnAttributes[] | null;
    };
};
export type UseGafpriPaginationsOrderReturnProps = {
    useData: UseGafpriDataOrderReturnReturn;
};
export declare const useGafpriPaginationsOrderReturn: ({ useData, }: UseGafpriPaginationsOrderReturnProps) => UseGafpriPaginationsOrderReturnReturn;
