import React from 'react';
import { InputProps } from './Input';
export type InputOfferPriceProps = {
    change: (cost: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputOfferPrice: ({ change, props, inputId, }: InputOfferPriceProps) => React.JSX.Element;
