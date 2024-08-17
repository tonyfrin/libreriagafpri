import React from 'react';
import { InputProps } from './Input';
export type InputAddress1Props = {
    changeAddress1: (Address1: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputAddress1: ({ changeAddress1, props, inputId, }: InputAddress1Props) => React.JSX.Element;
