import type { UseGafpriAttributesShippingMethodsReturn } from './useGafpriAttributesShippingMethods';
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
export type UseGafpriPagesShippingMethodsProps = {
    attributes: UseGafpriAttributesShippingMethodsReturn;
    closeModalPage: () => void;
};
export type UseGafpriPagesShippingMethodsReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriPagesShippingMethods({ attributes, closeModalPage, }: UseGafpriPagesShippingMethodsProps): UseGafpriPagesShippingMethodsReturn;
export {};
