export type BankTransactionsAttributes = {
    id?: number;
    bankTypePostsId: number;
    paymentMethodsPostsId?: number;
    type: string;
    paymentType: string;
    description?: string;
    nameSend?: string;
    status?: string;
    amount: number;
    change: number;
    balance?: number;
    balanceChange?: number;
    dateTransations: string;
    createdAt?: string;
};
type State = {
    bankTypePostsId: number;
    nameSend: string;
    type: string;
    paymentType: string;
    description: string;
    amount: number;
    change: number;
    dateTransations: string;
};
type Actions = {
    infoReset: () => void;
    setBankTypePostsId: (value: number) => void;
    setType: (value: string) => void;
    setPaymentType: (value: string) => void;
    setNameSend: (value: string) => void;
    setAmount: (value: number) => void;
    setChange: (value: number) => void;
    setDescription: (value: string) => void;
    setDateTransations: (value: string) => void;
};
export type UseGafpriAttributesBankTransactionsReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriAttributesBankTransactions(): UseGafpriAttributesBankTransactionsReturn;
export {};
