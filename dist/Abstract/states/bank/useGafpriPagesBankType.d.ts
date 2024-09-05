import { UseGafpriAttributesBankTypeReturn } from './useGafpriAttributesBankType';
import { UseGafpriSubPagesBankTypeReturn } from './useGafpriSubPagesBankType';
type State = {
    isFetching: boolean;
    isInit: boolean;
    isAdd: boolean;
    isUpdate: boolean;
    modalPage: boolean;
    isPortal: boolean;
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
    onPortal: () => void;
    goPortal: (postsId: number) => void;
};
export type UseGafpriPagesBankTypeReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriPagesBankTypeProps = {
    attributes: UseGafpriAttributesBankTypeReturn;
    subPages: UseGafpriSubPagesBankTypeReturn;
};
export declare function useGafpriPagesBankType({ attributes, subPages, }: UseGafpriPagesBankTypeProps): UseGafpriPagesBankTypeReturn;
export {};
