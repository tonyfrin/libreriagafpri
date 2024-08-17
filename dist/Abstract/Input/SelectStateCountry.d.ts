import React from 'react';
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectStateCountryProps = {
    changeStateCountry: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
    inputId?: string;
};
export declare const SelectStateCountry: ({ changeStateCountry, props, inputId, }: SelectStateCountryProps) => React.JSX.Element;
