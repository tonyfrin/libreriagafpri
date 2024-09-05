import React from 'react';
import { InputProps } from './Input';
export type InputNameProps = {
    changeName: (name: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputName: ({ changeName, props, inputId, }: InputNameProps) => React.JSX.Element;
