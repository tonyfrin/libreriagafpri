import React from 'react';
import { InputProps } from './Input';
export type InputLastNameProps = {
    changeLastName: (LastName: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputLastName: ({ changeLastName, props, inputId, }: InputLastNameProps) => React.JSX.Element;
