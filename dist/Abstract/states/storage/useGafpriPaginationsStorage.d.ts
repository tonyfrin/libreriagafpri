import { StorageAttributes, UseGafpriDataStorageReturn } from './useGafpriDataStorage';
type State = {
    orderList: 'asc' | 'desc';
    searchTerm: string;
    currentPage: number;
    itemsPerPage: number;
};
type Actions = {
    sortByName: (storages: StorageAttributes[] | null, order: 'asc' | 'desc') => StorageAttributes[] | null;
    setOrderList: (order: 'asc' | 'desc') => void;
    setSearchTerm: (value: string) => void;
    filterByName: (search: string) => StorageAttributes[] | null;
    setCurrentPage: (value: number) => void;
    getPaginated: (itemStorages: StorageAttributes[] | null, page: number, itemsPerPage: number) => StorageAttributes[] | null;
};
export type UseGafpriPaginationsStorageReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriPaginationsStorageProps = {
    data: UseGafpriDataStorageReturn;
};
export declare function useGafpriPaginationsStorage({ data, }: UseGafpriPaginationsStorageProps): UseGafpriPaginationsStorageReturn;
export {};
