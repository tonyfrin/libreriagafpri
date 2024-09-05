import React from 'react';
import { InputProps } from './Input';
export type InputQtyPackProps = {
    change: (value: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputQtyPack: ({ change, props, inputId, }: InputQtyPackProps) => React.JSX.Element;
