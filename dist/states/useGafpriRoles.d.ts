import type { UseErrorReturn } from './useGafpriError';
export interface RolesAttributes {
    id: number;
    name: string;
    permissions: string[];
    createdAt: Date;
    modifiedAt: Date;
}
type DeletedRoles = {
    itemId: number;
};
interface RolesData {
    data: {
        items: RolesAttributes[] | [] | null;
    };
}
type State = {
    isReady: boolean;
    isFetching: boolean;
    isInit: boolean;
    isAdd: boolean;
    isUpdate: boolean;
    name: string;
    nameValid: boolean;
    permissions: string[];
    roles: RolesData;
    currentId: number;
    error: string[];
    orderList: 'asc' | 'desc';
    searchTerm: string;
    currentPage: number;
    itemsPerPage: number;
};
type Actions = {
    changeName: (value: string) => void;
    validationName: (value: string) => void;
    changePermissions: (permissionValue: string, checked: boolean) => void;
    setPermissions: (value: string[]) => void;
    selectAllPermissions: () => void;
    deselectAllPermissions: () => void;
    validationButtonNext: () => void;
    setIsReady: (value: boolean) => void;
    onFetching: () => void;
    onInit: () => void;
    returnInit: () => void;
    onAdd: () => void;
    goAdd: () => void;
    update: () => void;
    onUpdate: () => void;
    offRoles: () => void;
    add: () => void;
    getById: (id: number) => RolesAttributes | null;
    goUpdate: (id: number) => void;
    sortByName: (items: RolesAttributes[] | null, order: 'asc' | 'desc') => RolesAttributes[] | null;
    setOrderList: (order: 'asc' | 'desc') => void;
    setSearchTerm: (value: string) => void;
    filterByName: (search: string) => RolesAttributes[] | null;
    setCurrentPage: (value: number) => void;
    getPaginated: (items: RolesAttributes[] | null, page: number, itemsPerPage: number) => RolesAttributes[] | null;
    deleteRoles: (id: number) => void;
    handleNewRoles: (newCurrency: RolesAttributes) => void;
    handleUpdatedRoles: (updatedCurrency: RolesAttributes) => void;
    handleDeletedRoles: ({ itemId }: DeletedRoles) => void;
};
export type UseRolesReturn = {
    states: State;
    actions: Actions;
};
export type UseRolesProps = {
    token: string | null;
    useError: UseErrorReturn;
};
export declare function useGafpriRoles({ token, useError, }: UseRolesProps): UseRolesReturn;
export {};
