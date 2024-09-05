import React from 'react';
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectAreaCodeProps = {
    changeAreaCode: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
    inputId?: string;
};
export declare const SelectAreaCode: ({ changeAreaCode, props, inputId, }: SelectAreaCodeProps) => React.JSX.Element;
