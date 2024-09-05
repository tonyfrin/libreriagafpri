import React from 'react';
import { InputProps } from './Input';
export type InputUndCbmProps = {
    change: (value: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputUndCbm: ({ change, props, inputId, }: InputUndCbmProps) => React.JSX.Element;
