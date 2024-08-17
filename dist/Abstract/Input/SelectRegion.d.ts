import React from 'react';
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectRegionProps = {
    changeRegion: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
    inputId?: string;
};
export declare const SelectRegion: ({ changeRegion, props, inputId, }: SelectRegionProps) => React.JSX.Element;
