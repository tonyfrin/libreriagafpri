import React from 'react';
import { InputProps } from './Input';
export type InputRateProps = {
    change: (value: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputRate: ({ change, props, inputId }: InputRateProps) => React.JSX.Element;
