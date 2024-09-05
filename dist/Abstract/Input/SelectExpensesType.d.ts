import React from 'react';
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectExpensesTypeProps = {
    change: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
    inputId?: string;
};
export declare const SelectExpensesType: ({ change, props, inputId, }: SelectExpensesTypeProps) => React.JSX.Element;
