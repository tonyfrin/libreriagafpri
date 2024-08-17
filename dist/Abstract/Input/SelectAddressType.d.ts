import React from 'react';
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectAddressTypeProps = {
    changeAddressType: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
    inputId?: string;
};
export declare const SelectAddressType: ({ changeAddressType, props, inputId, }: SelectAddressTypeProps) => React.JSX.Element;
