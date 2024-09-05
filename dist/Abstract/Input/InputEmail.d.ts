import React from 'react';
import { InputProps } from './Input';
export type InputEmailProps = {
    changeEmail: (email: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputEmail: ({ changeEmail, props, inputId, }: InputEmailProps) => React.JSX.Element;
