import React from 'react';
import { InputProps } from './Input';
export type InputPasswordProps = {
    changePassword: (password: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputPassword: ({ changePassword, props, inputId, }: InputPasswordProps) => React.JSX.Element;
