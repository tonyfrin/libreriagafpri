import React from 'react';
import { InputProps } from './Input';
export type InputInvoiceProps = {
    change: (value: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputInvoice: ({ change, props, inputId, }: InputInvoiceProps) => React.JSX.Element;
