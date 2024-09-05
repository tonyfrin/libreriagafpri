import React from 'react';
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectCurrenciesSeparatorProps = {
    changeCurrenciesSeparator: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
    inputId?: string;
};
export declare const SelectCurrenciesSeparator: ({ changeCurrenciesSeparator, props, inputId, }: SelectCurrenciesSeparatorProps) => React.JSX.Element;
