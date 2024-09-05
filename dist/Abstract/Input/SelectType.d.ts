import React from 'react';
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectTypeProps = {
    changeType: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
    inputId?: string;
};
export declare const SelectType: ({ changeType, props, inputId, }: SelectTypeProps) => React.JSX.Element;
