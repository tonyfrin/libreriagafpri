import React from 'react';
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectTaxesProps = {
    changeTaxes: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
    inputId?: string;
};
export declare const SelectTaxes: ({ changeTaxes, props, inputId, }: SelectTaxesProps) => React.JSX.Element;
