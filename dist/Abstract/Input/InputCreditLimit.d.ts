import React from 'react';
import { InputProps } from './Input';
export type InputCreditLimitProps = {
    change: (value: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputCreditLimit: ({ change, props, inputId, }: InputCreditLimitProps) => React.JSX.Element;
