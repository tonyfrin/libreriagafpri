import { UseErrorReturn } from './useGafpriError';
export interface TypeDocumentIdAttributes {
    id: number;
    name: string;
    country: string;
    createdAt: Date;
    modifiedAt: Date;
}
type DeletedTypeDocumentId = {
    itemId: number;
};
interface TypeDocumentIdData {
    data: {
        items: TypeDocumentIdAttributes[] | [] | null;
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
    country: string;
    countryValid: boolean;
    typeDocumentId: TypeDocumentIdData;
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
    changeCountry: (value: string) => void;
    validationCountry: (value: string) => void;
    validationButtonNext: () => void;
    setIsReady: (value: boolean) => void;
    onFetching: () => void;
    onInit: () => void;
    returnInit: () => void;
    onAdd: () => void;
    goAdd: () => void;
    goAddVzla: () => void;
    goAddUsa: () => void;
    update: () => void;
    onUpdate: () => void;
    offTypeDocumentId: () => void;
    add: () => void;
    getById: (id: number) => TypeDocumentIdAttributes | null;
    goUpdate: (id: number) => void;
    sortByName: (items: TypeDocumentIdAttributes[] | null, order: 'asc' | 'desc') => TypeDocumentIdAttributes[] | null;
    setOrderList: (order: 'asc' | 'desc') => void;
    setSearchTerm: (value: string) => void;
    filterByName: (search: string) => TypeDocumentIdAttributes[] | null;
    setCurrentPage: (value: number) => void;
    getPaginated: (items: TypeDocumentIdAttributes[] | null, page: number, itemsPerPage: number) => TypeDocumentIdAttributes[] | null;
    deleteTypeDocumentId: (id: number) => void;
    handleNewTypeDocumentId: (newCurrency: TypeDocumentIdAttributes) => void;
    handleUpdatedTypeDocumentId: (updatedCurrency: TypeDocumentIdAttributes) => void;
    handleDeletedTypeDocumentId: ({ itemId }: DeletedTypeDocumentId) => void;
};
export type UseTypeDocumentIdReturn = {
    states: State;
    actions: Actions;
};
export type UseTypeDocumentIdProps = {
    token: string | null;
    useError: UseErrorReturn;
};
export declare function useGafpriTypeDocumentId({ token, useError, }: UseTypeDocumentIdProps): UseTypeDocumentIdReturn;
export {};
