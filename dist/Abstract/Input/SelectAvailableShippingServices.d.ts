import React from 'react';
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectAvailableShippingServicesProps = {
    change: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
    inputId?: string;
};
export declare const SelectAvailableShippingServices: ({ change, props, inputId, }: SelectAvailableShippingServicesProps) => React.JSX.Element;
