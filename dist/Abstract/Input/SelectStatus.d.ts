import React from 'react';
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectStatusProps = {
    changeStatus: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
    inputId?: string;
};
export declare const SelectStatus: ({ changeStatus, props, inputId, }: SelectStatusProps) => React.JSX.Element;
