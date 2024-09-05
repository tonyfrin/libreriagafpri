import React, { InputHTMLAttributes } from 'react';
import type { GsSelectProps } from '../Input';
import type { ButtonProps } from '../Button';
export interface SearchBarProps {
    label: string;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
    selectProps?: Omit<GsSelectProps, 'options'> & {
        options?: {
            value: string;
            label: string;
        }[];
    };
    selectByProps?: Omit<GsSelectProps, 'options'> & {
        options?: {
            value: string;
            label: string;
        }[];
    };
    actionButton?: ButtonProps;
    mainContainerStyle?: string;
    infoContainerStyle?: string;
    titleContainerStyle?: string;
    breakContainerStyle?: string;
    breakStyle?: string;
    inputMainContainerStyle?: string;
    hiddenInputContainerStyle?: string;
    inputMiddleContainerStyle?: string;
    inputContainerStyle?: string;
    inputStyle?: string;
}
export declare const SearchBar: React.FC<SearchBarProps>;
