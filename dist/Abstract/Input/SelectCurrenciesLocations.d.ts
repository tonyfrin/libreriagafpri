import React from 'react';
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectCurrenciesLocationsProps = {
    changeCurrenciesLocations: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
    inputId?: string;
};
export declare const SelectCurrenciesLocations: ({ changeCurrenciesLocations, props, inputId, }: SelectCurrenciesLocationsProps) => React.JSX.Element;
