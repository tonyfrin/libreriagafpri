import { BankTypeAttributes, UseGafpriDataBankTypeReturn } from './useGafpriDataBankType';
import { BankTransactionsAttributes } from './bankTransactions';
type State = {
    orderList: 'asc' | 'desc';
    searchTerm: string;
    currentPage: number;
    transCurrentPage: number;
    itemsPerPage: number;
};
type Actions = {
    sortByName: (items: BankTypeAttributes[] | null, order: 'asc' | 'desc') => BankTypeAttributes[] | null;
    sortTransactionsById: (items: BankTransactionsAttributes[] | null) => BankTransactionsAttributes[] | null;
    setOrderList: (order: 'asc' | 'desc') => void;
    setSearchTerm: (value: string) => void;
    filterByName: (search: string) => BankTypeAttributes[] | null;
    setCurrentPage: (value: number) => void;
    setTransCurrentPage: (value: number) => void;
    getPaginated: (items: BankTypeAttributes[] | null, page: number, itemsPerPage: number) => BankTypeAttributes[] | null;
    getTransactionsgetPaginated: (items: BankTransactionsAttributes[] | null, page: number) => BankTransactionsAttributes[] | null;
};
export type UseGafpriPaginationsBankTypeReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriPaginationsBankTypeProps = {
    data: UseGafpriDataBankTypeReturn;
};
export declare function useGafpriPaginationsBankType({ data, }: UseGafpriPaginationsBankTypeProps): UseGafpriPaginationsBankTypeReturn;
export {};
