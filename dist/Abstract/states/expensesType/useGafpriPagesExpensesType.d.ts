import { UseGafpriAttributesExpensesTypeReturn } from './useGafpriAttributesExpensesType';
type State = {
    isFetching: boolean;
    isInit: boolean;
    isAdd: boolean;
    isUpdate: boolean;
    childrenFetching: boolean;
};
type Actions = {
    onFetching: () => void;
    onInit: () => void;
    returnInit: () => void;
    onAdd: () => void;
    goAdd: () => void;
    onUpdate: () => void;
    goUpdate: (id: number) => void;
    onChildrenFetching: () => void;
    outChildrenFetching: () => void;
};
export type UseGafpriPagesExpensesTypeReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriPagesExpensesTypeProps = {
    attributes: UseGafpriAttributesExpensesTypeReturn;
};
export declare function useGafpriPagesExpensesType({ attributes, }: UseGafpriPagesExpensesTypeProps): UseGafpriPagesExpensesTypeReturn;
export {};
