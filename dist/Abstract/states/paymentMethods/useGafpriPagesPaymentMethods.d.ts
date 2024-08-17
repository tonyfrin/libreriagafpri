type State = {
    isFetching: boolean;
    isCash: boolean;
    isTransfer: boolean;
    isCredit: boolean;
    isAuthorization: boolean;
    isSingle: boolean;
};
type Actions = {
    onFetching: () => void;
    onCash: () => void;
    onTransfer: () => void;
    onCredit: () => void;
    onAuthorization: () => void;
    onSingle: () => void;
};
export type UseGafpriPagesPaymentMethodsReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriPagesPaymentMethods(): UseGafpriPagesPaymentMethodsReturn;
export {};
