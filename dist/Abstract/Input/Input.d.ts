import React, { InputHTMLAttributes } from 'react';
import { ActionMeta, SingleValue } from 'react-select';
import type { ContainerStyles } from '../Containers';
export type OnChange = (newValue: SingleValue<{
    value: string;
    label: string;
}>, actionMeta: ActionMeta<{
    value: string;
    label: string;
}>) => void | undefined;
export type SpanStyle = {
    fontSize?: string;
    color?: string;
    paddingLeft?: string;
    props?: string;
};
type Media = {
    fontSize?: string | number;
};
export type InputStyle = {
    width?: string | number;
    height?: string;
    border?: string;
    padding?: string | number;
    textAlign?: string;
    outline?: string | number;
    borderRadius?: string;
    backgroundColor?: string;
    fontSize?: string | number;
    fontWeight?: string | number;
    color?: string;
    media750Style?: Media | undefined;
    media400Style?: Media | undefined;
    media300Style?: Media | undefined;
};
export type InputProps = {
    styles?: InputStyle | undefined;
    stylesSpan?: SpanStyle | undefined;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
    inputClass?: string | undefined;
    containerStyles?: ContainerStyles | undefined;
    containerClass?: string | undefined;
    ref?: React.LegacyRef<HTMLInputElement>;
};
export declare const Input: ({ styles, stylesSpan, inputClass, inputProps, containerStyles, containerClass, ref, }: InputProps) => React.JSX.Element;
type media = {
    width?: string;
    fontSize?: string;
};
export type SelectStyle = {
    width?: string | number;
    fontSize?: string;
    fontWeight?: string;
    color?: string;
    fontFamily?: string;
    media600Style?: media | undefined;
    media400Style?: media | undefined;
};
export type GsSelectProps = {
    styles?: SelectStyle;
    Class?: string;
    options: {
        value: string;
        label: string;
    }[];
    id?: string;
    onChange?: OnChange;
    placeholder?: string;
    containerStyles?: ContainerStyles;
    containerClass?: string;
    defaultValue?: {
        value: string;
        label: string;
    };
    title?: string;
    stylesSpan?: SpanStyle | undefined;
};
export type GsSelectPropsExtended = {
    styles?: SelectStyle;
    Class?: string;
    options?: {
        value: string;
        label: string;
    }[];
    id?: string;
    onChange?: OnChange;
    placeholder?: string;
    containerStyles?: ContainerStyles;
    containerClass?: string;
    defaultValue?: {
        value: string;
        label: string;
    };
    title?: string;
    stylesSpan?: SpanStyle | undefined;
};
export declare const GsSelect: ({ styles, Class, options, id, onChange, placeholder, containerStyles, containerClass, defaultValue, title, stylesSpan, }: GsSelectProps) => React.JSX.Element;
export {};
