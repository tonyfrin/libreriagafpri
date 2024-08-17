import React from 'react';
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectCashRegisterTypeProps = {
    change: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
    inputId?: string;
};
export declare const SelectCashRegisterType: ({ change, props, inputId, }: SelectCashRegisterTypeProps) => React.JSX.Element;
