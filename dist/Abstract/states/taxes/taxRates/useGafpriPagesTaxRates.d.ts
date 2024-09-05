import type { UseGafpriAttributesTaxRatesReturn } from './useGafpriAttributesTaxRates';
type State = {
    isFetching: boolean;
    isInit: boolean;
    isAdd: boolean;
    isUpdate: boolean;
};
type Actions = {
    onFetching: () => void;
    onInit: () => void;
    onAdd: () => void;
    onUpdate: () => void;
    goUpdate: (id: number) => void;
    goAdd: () => void;
    returnInit: () => void;
};
export type UseGafpriPagesTaxRatesProps = {
    attributes: UseGafpriAttributesTaxRatesReturn;
    closeModalPage: () => void;
};
export type UseGafpriPagesTaxRatesReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriPagesTaxRates({ attributes, closeModalPage, }: UseGafpriPagesTaxRatesProps): UseGafpriPagesTaxRatesReturn;
export {};
