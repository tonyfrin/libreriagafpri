import React from 'react';
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectParentIdProps = {
    changeParentId: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
    inputId?: string;
};
export declare const SelectParentId: ({ changeParentId, props, inputId, }: SelectParentIdProps) => React.JSX.Element;
