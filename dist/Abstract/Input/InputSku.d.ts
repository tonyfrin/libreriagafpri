import React from 'react';
import { InputProps } from './Input';
export type InputSkuProps = {
    change: (name: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputSku: ({ change, props, inputId }: InputSkuProps) => React.JSX.Element;
