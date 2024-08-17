import React from 'react';
import { InputProps } from './Input';
export type InputAccountNumberProps = {
    change: (value: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputAccountNumber: ({ change, props, inputId, }: InputAccountNumberProps) => React.JSX.Element;
