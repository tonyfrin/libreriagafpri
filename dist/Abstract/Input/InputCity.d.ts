import React from 'react';
import { SingleValue } from 'react-select';
import { InputProps } from './Input';
export type InputCityProps = {
    changeCity: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputCity: ({ changeCity, props, inputId, }: InputCityProps) => React.JSX.Element;
