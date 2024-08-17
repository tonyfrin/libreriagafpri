import React from 'react';
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectTypeDocumentIdIdProps = {
    changeTypeDocumentIdId: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
    inputId?: string;
};
export declare const SelectTypeDocumentIdId: ({ changeTypeDocumentIdId, props, inputId, }: SelectTypeDocumentIdIdProps) => React.JSX.Element;
