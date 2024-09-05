import React from 'react';
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectAccountTypeProps = {
    change: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
    inputId?: string;
};
export declare const SelectAccountType: ({ change, props, inputId, }: SelectAccountTypeProps) => React.JSX.Element;
