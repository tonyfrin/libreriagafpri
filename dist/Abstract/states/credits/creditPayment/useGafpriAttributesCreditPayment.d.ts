export type CreditPaymentAttributes = {
    creditOpeningPostsId: number;
    paymentMethodsPostsId?: number;
    description?: string;
    amount: number;
};
type State = {
    creditOpeningPostsId: number;
    amount: number;
};
type Actions = {
    infoReset: () => void;
    setCreditOpeningPostsId: (value: number) => void;
    setAmount: (value: number) => void;
};
export type UseGafpriAttributesCreditPaymentReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriAttributesCreditPayment(): UseGafpriAttributesCreditPaymentReturn;
export {};
