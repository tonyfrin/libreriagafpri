import { UseGafpriAttributesStorageReturn } from './useGafpriAttributesStorage';
type State = {
    isFetching: boolean;
    isInit: boolean;
    isAdd: boolean;
    isUpdate: boolean;
};
type Actions = {
    onFetching: () => void;
    onInit: () => void;
    returnInit: () => void;
    onAdd: () => void;
    goAdd: () => void;
    goUpdate: (id: number) => void;
    onUpdate: () => void;
};
export type UseGafpriPagesStorageReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriPagesStorageProps = {
    attributes: UseGafpriAttributesStorageReturn;
};
export declare function useGafpriPagesStorage({ attributes, }: UseGafpriPagesStorageProps): UseGafpriPagesStorageReturn;
export {};
