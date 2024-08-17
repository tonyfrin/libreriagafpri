import { PaymentAttributes } from '../payment';
import { PostsAttributes } from '../../../states';
import { CreditOpeningAttributes } from '../credits';
export type PaymentMethodsAttributes = {
    methodType: string;
    type: 'deposit' | 'debit' | '';
    paymentType?: string;
    currenciesId: number;
    bank?: string;
    number?: string;
    amount: number;
    change: number;
    note?: string;
    payment?: PaymentAttributes;
    creditOpening?: CreditOpeningAttributes[];
    posts?: PostsAttributes;
};
type State = {
    methodType: string;
    type: 'deposit' | 'debit' | '';
    paymentType: string;
    currenciesId: number;
    bank: string;
    number: string;
    amount: number;
    change: number;
    note: string;
};
type Actions = {
    infoReset: () => void;
    setMethodType: (value: string) => void;
    setPaymentType: (value: string) => void;
    setBank: (value: string) => void;
    setNumber: (value: string) => void;
    setCurrenciesId: (value: number) => void;
    setType: (value: 'deposit' | 'debit') => void;
    setAmount: (value: number) => void;
    setChange: (value: number) => void;
    setNote: (value: string) => void;
};
export type UseGafpriAttributesPaymentMethodsReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriAttributesPaymentMethods(): UseGafpriAttributesPaymentMethodsReturn;
export {};
