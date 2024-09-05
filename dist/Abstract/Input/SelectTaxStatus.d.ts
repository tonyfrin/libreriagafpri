import React from 'react';
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectTaxStatusProps = {
    change: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
    inputId?: string;
};
export declare const SelectTaxStatus: ({ change, props, inputId, }: SelectTaxStatusProps) => React.JSX.Element;
