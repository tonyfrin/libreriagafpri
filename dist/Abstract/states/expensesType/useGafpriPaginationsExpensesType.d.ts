import { ExpensesTypeAttributes } from './useGafpriDataExpensesType';
type State = {
    orderList: 'asc' | 'desc';
    searchTerm: string;
    currentPage: number;
    itemsPerPage: number;
};
type Actions = {
    sortByName: (items: ExpensesTypeAttributes[] | null, order: 'asc' | 'desc') => ExpensesTypeAttributes[] | null;
    setOrderList: (order: 'asc' | 'desc') => void;
    setSearchTerm: (value: string) => void;
    filterByName: (items: ExpensesTypeAttributes[] | null, search: string) => ExpensesTypeAttributes[] | null;
    setCurrentPage: (value: number) => void;
    getPaginated: (items: ExpensesTypeAttributes[] | null, page: number, itemsPerPage: number) => ExpensesTypeAttributes[] | null;
};
export type UseGafpriPaginationsExpensesTypeReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriPaginationsExpensesType(): UseGafpriPaginationsExpensesTypeReturn;
export {};
