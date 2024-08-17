import React from 'react';
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectCityProps = {
    changeCity: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
    inputId?: string;
};
export declare const SelectCity: ({ changeCity, props, inputId, }: SelectCityProps) => React.JSX.Element;
