import { SingleValue } from 'react-select';
import type { SelectDefault } from '../../../helpers';
import type { UseGafpriDataExpensesReturn, ExpensesAttributes } from './useGafpriDataExpenses';
export type UseGafpriPaginationsExpensesReturn = {
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
        sortByName: (items: ExpensesAttributes[] | null, order: 'asc' | 'desc') => ExpensesAttributes[] | null;
        filterByName: (search: string) => ExpensesAttributes[] | null;
        getPaginated: (items: ExpensesAttributes[] | null, page: number, itemPerPage: number) => ExpensesAttributes[] | null;
        sortByProperty: (items: ExpensesAttributes[] | null, search: 'postsId' | 'status' | 'total' | 'name', order: 'asc' | 'desc') => ExpensesAttributes[] | null;
        filterBySearch: (search: string, searchType: 'postsId' | 'status' | 'total' | 'name') => ExpensesAttributes[] | null;
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
export type UseGafpriPaginationsExpensesProps = {
    useData: UseGafpriDataExpensesReturn;
};
export declare const useGafpriPaginationsExpenses: ({ useData, }: UseGafpriPaginationsExpensesProps) => UseGafpriPaginationsExpensesReturn;
