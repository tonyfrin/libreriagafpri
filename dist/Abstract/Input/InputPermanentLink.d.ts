import React from 'react';
import { InputProps } from './Input';
export type InputPermanentLinkProps = {
    change: (name: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputPermanentLink: ({ change, props, inputId, }: InputPermanentLinkProps) => React.JSX.Element;
