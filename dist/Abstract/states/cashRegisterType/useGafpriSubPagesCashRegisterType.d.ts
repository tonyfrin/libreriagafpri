type State = {
    isFetching: boolean;
    isInit: boolean;
    isExpenses: boolean;
    isIncome: boolean;
    isTransfer: boolean;
};
type Actions = {
    onFetching: () => void;
    onInit: () => void;
    onExpenses: () => void;
    onIncome: () => void;
    onTransfer: () => void;
};
export type UseGafpriSubPagesCashRegisterTypeReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriSubPagesCashRegisterType(): UseGafpriSubPagesCashRegisterTypeReturn;
export {};
