import React from 'react';
import { InputProps } from './Input';
export type InputSalesPriceProps = {
    change: (cost: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputSalesPrice: ({ change, props, inputId, }: InputSalesPriceProps) => React.JSX.Element;
