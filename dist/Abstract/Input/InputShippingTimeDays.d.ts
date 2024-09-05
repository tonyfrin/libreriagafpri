import React from 'react';
import { InputProps } from './Input';
export type InputShippingTimeDaysProps = {
    change: (cost: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputShippingTimeDays: ({ change, props, inputId, }: InputShippingTimeDaysProps) => React.JSX.Element;
