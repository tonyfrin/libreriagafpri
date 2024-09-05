import React from 'react';
type ButtonPayment = {
    title: string;
    action: () => void;
};
type ButtonsPaymentMethodsContainerStyleProps = {
    display?: string;
    justifyContent?: string;
    custom?: string;
};
type ButtonsPaymentMethodsContentStyleProps = {
    display?: string;
    flexFlow?: string;
    justifyContent?: string;
    custom?: string;
};
export type ButtonsPaymentMethodsFormProps = {
    buttonsDeposit: ButtonPayment[];
    buttonsDebit: ButtonPayment[];
    total: number;
    depositTotal: number;
    debitTotal: number;
    setNote: (value: string) => void;
    add: () => void;
    containerStyle?: ButtonsPaymentMethodsContainerStyleProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    contentStyle?: ButtonsPaymentMethodsContentStyleProps;
    contentProps?: React.HTMLAttributes<HTMLDivElement>;
};
export declare const ButtonsPaymentMethodsForm: ({ buttonsDeposit, buttonsDebit, total, depositTotal, debitTotal, setNote, add, containerStyle, containerProps, contentStyle, contentProps, }: ButtonsPaymentMethodsFormProps) => JSX.Element;
export {};
