import React from 'react';
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectProjectIdProps = {
    change: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
    inputId?: string;
};
export declare const SelectProjectId: ({ change, props, inputId, }: SelectProjectIdProps) => React.JSX.Element;
