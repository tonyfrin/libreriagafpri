import React from 'react';
import { SingleValue } from 'react-select';
import { InputProps } from './Input';
export type InputStateCountryProps = {
    changeStateCountry: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputStateCountry: ({ changeStateCountry, props, inputId, }: InputStateCountryProps) => React.JSX.Element;
