import React from 'react';
import { InputProps } from './Input';
export type InputCatalogOrderProps = {
    change: (cost: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputCatalogOrder: ({ change, props, inputId, }: InputCatalogOrderProps) => React.JSX.Element;
