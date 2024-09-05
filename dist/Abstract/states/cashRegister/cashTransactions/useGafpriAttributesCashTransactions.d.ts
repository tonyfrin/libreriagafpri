export type CashTransactionsAttributes = {
    id?: number;
    cashRegisterTypePostsId: number;
    cashRegisterPostsId: number;
    type: string;
    amount: number;
    change: number;
    currenciesId: number;
    note?: string;
};
type State = {
    cashRegisterTypePostsId: number;
    cashRegisterPostsId: number;
    type: string;
    amount: number;
    change: number;
    currenciesId: number;
    note: string;
};
type Actions = {
    infoReset: () => void;
    setCashRegisterTypePostsId: (value: number) => void;
    setCashRegisterPostsId: (value: number) => void;
    setType: (value: string) => void;
    setAmount: (value: number) => void;
    setChange: (value: number) => void;
    setCurrenciesId: (value: number) => void;
    setNote: (value: string) => void;
};
export type UseGafpriAttributesCashTransactionsReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriAttributesCashTransactions(): UseGafpriAttributesCashTransactionsReturn;
export {};
