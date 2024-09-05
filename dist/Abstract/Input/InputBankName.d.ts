import React from 'react';
import { InputProps } from './Input';
export type InputBankNameProps = {
    change: (name: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputBankName: ({ change, props, inputId, }: InputBankNameProps) => React.JSX.Element;
