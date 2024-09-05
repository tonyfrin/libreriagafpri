import type { UseGafpriAttributesProductsReturn } from './useGafpriAttributesProducts';
import type { UseGafpriSubPagesProductsReturn } from './useGafpriSubPagesProducts';
type State = {
    isFetching: boolean;
    isInit: boolean;
    isAdd: boolean;
    isUpdate: boolean;
    modalPage: boolean;
};
type Actions = {
    onFetching: () => void;
    onInit: () => void;
    onAdd: () => void;
    onUpdate: () => void;
    goUpdate: (id: number) => void;
    goAdd: () => void;
    returnInit: () => void;
    openModalPage: () => void;
    closeModalPage: () => void;
};
export type UseGafpriPagesProductsProps = {
    attributes: UseGafpriAttributesProductsReturn;
    subPages: UseGafpriSubPagesProductsReturn;
};
export type UseGafpriPagesProductsReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriPagesProducts({ attributes, subPages, }: UseGafpriPagesProductsProps): UseGafpriPagesProductsReturn;
export {};
