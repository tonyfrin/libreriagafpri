import React from 'react';
import { InputProps } from './Input';
export type InputCreditTimeToPayProps = {
    change: (value: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputCreditTimeToPay: ({ change, props, inputId, }: InputCreditTimeToPayProps) => React.JSX.Element;
