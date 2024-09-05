import { CashRegisterTypeAttributes, UseGafpriDataCashRegisterTypeReturn } from './useGafpriDataCashRegisterType';
import { CashTransactionsAttributes } from '../cashRegister';
type State = {
    orderList: 'asc' | 'desc';
    searchTerm: string;
    currentPage: number;
    itemsPerPage: number;
    debitCurrentPage: number;
    creditCurrentPage: number;
};
type Actions = {
    sortByName: (storages: CashRegisterTypeAttributes[] | null, order: 'asc' | 'desc') => CashRegisterTypeAttributes[] | null;
    setOrderList: (order: 'asc' | 'desc') => void;
    setSearchTerm: (value: string) => void;
    filterByName: (search: string) => CashRegisterTypeAttributes[] | null;
    setCurrentPage: (value: number) => void;
    getPaginated: (itemStorages: CashRegisterTypeAttributes[] | null, page: number, itemsPerPage: number) => CashRegisterTypeAttributes[] | null;
    sortCashTransactionsById: (items: CashTransactionsAttributes[] | null, order: 'asc' | 'desc') => CashTransactionsAttributes[] | null;
    setDebitCurrentPage: (value: number) => void;
    setCreditCurrentPage: (value: number) => void;
    getCashTransactionsgetPaginated: (items: CashTransactionsAttributes[] | null, page: number, itemPerPage: number) => CashTransactionsAttributes[] | null;
};
export type UseGafpriPaginationsCashRegisterTypeReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriPaginationsCashRegisterTypeProps = {
    data: UseGafpriDataCashRegisterTypeReturn;
};
export declare function useGafpriPaginationsCashRegisterType({ data, }: UseGafpriPaginationsCashRegisterTypeProps): UseGafpriPaginationsCashRegisterTypeReturn;
export {};
