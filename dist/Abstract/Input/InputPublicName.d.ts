import React from 'react';
import { InputProps } from '../Input';
export type InputPublicNameProps = {
    change: (name: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputPublicName: ({ change, props, inputId, }: InputPublicNameProps) => React.JSX.Element;
