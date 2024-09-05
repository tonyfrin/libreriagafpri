import React from 'react';
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectSiteProps = {
    changeSite: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
    inputId?: string;
};
export declare const SelectSite: ({ changeSite, props, inputId, }: SelectSiteProps) => React.JSX.Element;
