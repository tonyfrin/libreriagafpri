import { WalletAccountAttributes, UseGafpriDataWalletAccountReturn } from './useGafpriDataWalletAccount';
type State = {
    orderList: 'asc' | 'desc';
    searchTerm: string;
    currentPage: number;
    itemsPerPage: number;
};
type Actions = {
    sortByName: (items: WalletAccountAttributes[] | null, order: 'asc' | 'desc') => WalletAccountAttributes[] | null;
    setOrderList: (order: 'asc' | 'desc') => void;
    setSearchTerm: (value: string) => void;
    filterByName: (search: string) => WalletAccountAttributes[] | null;
    setCurrentPage: (value: number) => void;
    getPaginated: (items: WalletAccountAttributes[] | null, page: number, itemsPerPage: number) => WalletAccountAttributes[] | null;
};
export type UseGafpriPaginationsWalletAccountReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriPaginationsWalletAccountProps = {
    data: UseGafpriDataWalletAccountReturn;
};
export declare function useGafpriPaginationsWalletAccount({ data, }: UseGafpriPaginationsWalletAccountProps): UseGafpriPaginationsWalletAccountReturn;
export {};
