import React from 'react';
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectDocumentIdIndexProps = {
    changeIndex: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
    inputId?: string;
};
export declare const SelectDocumentIdIndex: ({ changeIndex, props, inputId, }: SelectDocumentIdIndexProps) => React.JSX.Element;
