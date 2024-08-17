import React from 'react';
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectRolesProps = {
    changeRoles: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
    inputId?: string;
};
export declare const SelectRoles: ({ changeRoles, props, inputId, }: SelectRolesProps) => React.JSX.Element;
