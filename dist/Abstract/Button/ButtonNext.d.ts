import React from 'react';
import type { ButtonProps } from './Button';
export type ButtonNextProps = {
    title: string;
    props?: ButtonProps;
    inputId?: string;
};
export declare const ButtonNext: ({ title, props, inputId }: ButtonNextProps) => React.JSX.Element;
