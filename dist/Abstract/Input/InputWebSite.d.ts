import React from 'react';
import { InputProps } from './Input';
export type InputWebSiteProps = {
    changeWebSite: (email: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputWebSite: ({ changeWebSite, props, inputId, }: InputWebSiteProps) => React.JSX.Element;
