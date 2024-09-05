import React from 'react';
import { InputProps } from './Input';
export type InputUserNameProps = {
    changeUserName: (userName: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputUserName: ({ changeUserName, props, inputId, }: InputUserNameProps) => React.JSX.Element;
