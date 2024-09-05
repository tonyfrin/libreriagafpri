import React from 'react';
import { InputProps } from './Input';
export type InputLengthProps = {
    change: (value: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputLength: ({ change, props, inputId, }: InputLengthProps) => React.JSX.Element;
