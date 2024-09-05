import React from 'react';
import { InputProps } from './Input';
export type InputHeightProps = {
    change: (value: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputHeight: ({ change, props, inputId, }: InputHeightProps) => React.JSX.Element;
