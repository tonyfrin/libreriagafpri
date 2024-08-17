import React from 'react';
import { InputProps } from './Input';
export type InputWidthProps = {
    change: (value: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputWidth: ({ change, props, inputId, }: InputWidthProps) => React.JSX.Element;
