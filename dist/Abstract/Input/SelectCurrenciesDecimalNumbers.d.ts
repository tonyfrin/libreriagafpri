import React from 'react';
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectCurrenciesDecimalNumbersProps = {
    changeCurrenciesDecimalNumbers: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
    inputId?: string;
};
export declare const SelectCurrenciesDecimalNumbers: ({ changeCurrenciesDecimalNumbers, props, inputId, }: SelectCurrenciesDecimalNumbersProps) => React.JSX.Element;
