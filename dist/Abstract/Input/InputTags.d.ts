import React from 'react';
import { InputProps } from './Input';
export type InputTagsProps = {
    change: (tag: string) => void;
    props?: InputProps;
    setSelected: (tag: string) => void;
};
export declare const InputTags: ({ change, props, setSelected }: InputTagsProps) => React.JSX.Element;
