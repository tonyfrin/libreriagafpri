import React from 'react';
import { InputProps } from './Input';
export type InputNoteProps = {
    change: (value: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputNote: ({ change, props, inputId }: InputNoteProps) => React.JSX.Element;
