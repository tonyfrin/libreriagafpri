import React from 'react';
import { InputProps } from './Input';
export type InputWeightProps = {
    change: (value: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputWeight: ({ change, props, inputId, }: InputWeightProps) => React.JSX.Element;
