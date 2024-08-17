import { SingleValue } from 'react-select';
import type { SelectDefault } from '../../../helpers';
import type { UseGafpriDataBudgetReturn, BudgetAttributes } from './useGafpriDataBudget';
export type UseGafpriPaginationsBudgetReturn = {
    states: {
        orderList: 'asc' | 'desc';
        searchTerm: string;
        currentPage: number;
        documentCurrentPage: number;
        searchBy: 'postsId' | 'status' | 'total' | 'name';
        searchByDefault: SelectDefault;
        searchByOptions: {
            value: string;
            label: string;
        }[];
        itemsPerPage: number;
    };
    actions: {
        sortByName: (items: BudgetAttributes[] | null, order: 'asc' | 'desc') => BudgetAttributes[] | null;
        filterByName: (search: string) => BudgetAttributes[] | null;
        getPaginated: (items: BudgetAttributes[] | null, page: number, itemPerPage: number) => BudgetAttributes[] | null;
        sortByProperty: (items: BudgetAttributes[] | null, search: 'postsId' | 'status' | 'total' | 'name', order: 'asc' | 'desc') => BudgetAttributes[] | null;
        filterBySearch: (search: string, searchType: 'postsId' | 'status' | 'total' | 'name') => BudgetAttributes[] | null;
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
export type UseGafpriPaginationsBudgetProps = {
    useData: UseGafpriDataBudgetReturn;
};
export declare const useGafpriPaginationsBudget: ({ useData, }: UseGafpriPaginationsBudgetProps) => UseGafpriPaginationsBudgetReturn;
