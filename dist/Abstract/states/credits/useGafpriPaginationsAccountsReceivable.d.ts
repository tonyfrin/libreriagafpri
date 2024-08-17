import { AccountsReceivableAttributes, UseGafpriDataAccountsReceivableReturn } from './useGafpriDataAccountsReceivable';
type State = {
    orderList: 'asc' | 'desc';
    searchTerm: string;
    currentPage: number;
    itemsPerPage: number;
};
type Actions = {
    sortByName: (items: AccountsReceivableAttributes[] | null, order: 'asc' | 'desc') => AccountsReceivableAttributes[] | null;
    setOrderList: (order: 'asc' | 'desc') => void;
    setSearchTerm: (value: string) => void;
    filterByName: (search: string) => AccountsReceivableAttributes[] | null;
    setCurrentPage: (value: number) => void;
    getPaginated: (items: AccountsReceivableAttributes[] | null, page: number, itemsPerPage: number) => AccountsReceivableAttributes[] | null;
};
export type UseGafpriPaginationsAccountsReceivableReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriPaginationsAccountsReceivableProps = {
    data: UseGafpriDataAccountsReceivableReturn;
};
export declare function useGafpriPaginationsAccountsReceivable({ data, }: UseGafpriPaginationsAccountsReceivableProps): UseGafpriPaginationsAccountsReceivableReturn;
export {};
