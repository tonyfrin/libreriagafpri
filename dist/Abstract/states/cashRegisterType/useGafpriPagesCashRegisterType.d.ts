import { UseGafpriAttributesCashRegisterTypeReturn } from './useGafpriAttributesCashRegisterType';
import { UseGafpriSubPagesCashRegisterTypeReturn } from './useGafpriSubPagesCashRegisterType';
type State = {
    isFetching: boolean;
    isInit: boolean;
    isAdd: boolean;
    isUpdate: boolean;
    modalPage: boolean;
    isCashPortal: boolean;
};
type Actions = {
    onFetching: () => void;
    onInit: () => void;
    returnInit: () => void;
    onAdd: () => void;
    goAdd: () => void;
    goUpdate: (id: number) => void;
    onUpdate: () => void;
    openModalPage: () => void;
    closeModalPage: () => void;
    onCashPortal: () => void;
    goCashPortal: (postsId: number) => void;
};
export type UseGafpriPagesCashRegisterTypeReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriPagesCashRegisterTypeProps = {
    attributes: UseGafpriAttributesCashRegisterTypeReturn;
    subPages: UseGafpriSubPagesCashRegisterTypeReturn;
};
export declare function useGafpriPagesCashRegisterType({ attributes, subPages, }: UseGafpriPagesCashRegisterTypeProps): UseGafpriPagesCashRegisterTypeReturn;
export {};
