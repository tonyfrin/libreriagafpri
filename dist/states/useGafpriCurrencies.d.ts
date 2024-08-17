import { SelectDefault } from '../helpers';
import type { UseErrorReturn } from './useGafpriError';
export interface CurrenciesAttributes {
    id: number;
    name: string;
    symbol: string;
    createdAt: Date;
    modifiedAt: Date;
}
type DeletedCurrency = {
    itemId: number;
};
interface CurrenciesData {
    data: {
        items: CurrenciesAttributes[] | [] | null;
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
    symbol: string;
    symbolValid: boolean;
    currencies: CurrenciesData;
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
    changeSymbol: (value: string) => void;
    validationSymbol: (value: string) => void;
    validationButtonNext: () => void;
    setIsReady: (value: boolean) => void;
    onFetching: () => void;
    onInit: () => void;
    returnInit: () => void;
    offCurrencies: () => void;
    onAdd: () => void;
    goAdd: () => void;
    updateCurrency: () => void;
    onUpdate: () => void;
    addCurrencies: () => void;
    getById: (id: number) => CurrenciesAttributes | null;
    goUpdate: (id: number) => void;
    sortCurrenciesByName: (currencies: CurrenciesAttributes[] | null, order: 'asc' | 'desc') => CurrenciesAttributes[] | null;
    setOrderList: (order: 'asc' | 'desc') => void;
    setSearchTerm: (value: string) => void;
    filterCurrenciesByName: (search: string) => CurrenciesAttributes[] | null;
    setCurrentPage: (value: number) => void;
    getPaginatedCurrencies: (currencies: CurrenciesAttributes[] | null, page: number, itemsPerPage: number) => CurrenciesAttributes[] | null;
    deleteCurrency: (id: number) => void;
    handleNewCurrency: (newCurrency: CurrenciesAttributes) => void;
    handleUpdatedCurrency: (updatedCurrency: CurrenciesAttributes) => void;
    handleDeletedCurrency: ({ itemId }: DeletedCurrency) => void;
    getOptionsItems: () => SelectDefault[];
};
export type UseCurrenciesReturn = {
    states: State;
    actions: Actions;
};
export type UseCurrenciesProps = {
    token: string | null;
    useError: UseErrorReturn;
};
export declare function useGafpriCurrencies({ token, useError, }: UseCurrenciesProps): UseCurrenciesReturn;
export {};
