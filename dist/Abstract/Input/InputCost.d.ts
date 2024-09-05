import React from 'react';
import { InputProps } from './Input';
export type InputCostProps = {
    changeCost: (cost: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputCost: ({ changeCost, props, inputId, }: InputCostProps) => React.JSX.Element;
