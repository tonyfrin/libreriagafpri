import type { UseGafpriAttributesTaxClassesReturn } from './useGafpriAttributesTaxClasses';
import type { TaxClassesAttributes } from './useGafpriDataTaxClasses';
type Data = {
    item?: TaxClassesAttributes;
    success?: boolean;
    name: string;
    description: string;
};
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
    goUpdateFromAdd: (data: Data) => void;
    openModalPage: () => void;
    closeModalPage: () => void;
};
export type UseGafpriPagesTaxClassesProps = {
    attributes: UseGafpriAttributesTaxClassesReturn;
};
export type UseGafpriPagesTaxClassesReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriPagesTaxClasses({ attributes, }: UseGafpriPagesTaxClassesProps): UseGafpriPagesTaxClassesReturn;
export {};
