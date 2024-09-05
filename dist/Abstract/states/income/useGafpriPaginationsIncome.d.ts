import { SingleValue } from 'react-select';
import type { SelectDefault } from '../../../helpers';
import type { UseGafpriDataIncomeReturn, IncomeAttributes } from './useGafpriDataIncome';
export type UseGafpriPaginationsIncomeReturn = {
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
        sortByName: (items: IncomeAttributes[] | null, order: 'asc' | 'desc') => IncomeAttributes[] | null;
        filterByName: (search: string) => IncomeAttributes[] | null;
        getPaginated: (items: IncomeAttributes[] | null, page: number, itemPerPage: number) => IncomeAttributes[] | null;
        sortByProperty: (items: IncomeAttributes[] | null, search: 'postsId' | 'status' | 'total' | 'name', order: 'asc' | 'desc') => IncomeAttributes[] | null;
        filterBySearch: (search: string, searchType: 'postsId' | 'status' | 'total' | 'name') => IncomeAttributes[] | null;
        changeSearchBy: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        setOrderList: (order: 'asc' | 'desc') => void;
        setSearchTerm: (search: string) => void;
        setCurrentPage: (page: number) => void;
        setDocumentCurrentPage: (page: number) => void;
    };
};
export type UseGafpriPaginationsIncomeProps = {
    useData: UseGafpriDataIncomeReturn;
};
export declare const useGafpriPaginationsIncome: ({ useData, }: UseGafpriPaginationsIncomeProps) => UseGafpriPaginationsIncomeReturn;
