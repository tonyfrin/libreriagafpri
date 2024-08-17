type State = {
    isFetching: boolean;
    isOrder: boolean;
    isCredits: boolean;
    isPayment: boolean;
    modalPage: boolean;
};
type Actions = {
    onFetching: () => void;
    onOrder: () => void;
    onCredits: () => void;
    onPayment: () => void;
    openModalPage: () => void;
    closeModalPage: () => void;
};
export type UseGafpriSubPagesDepositPaymentReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriSubPagesDepositPayment(): UseGafpriSubPagesDepositPaymentReturn;
export {};
