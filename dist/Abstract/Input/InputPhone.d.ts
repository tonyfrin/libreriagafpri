import React from 'react';
import { InputProps } from './Input';
export type InputPhoneProps = {
    changePhone: (phone: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputPhone: ({ changePhone, props, inputId, }: InputPhoneProps) => React.JSX.Element;
