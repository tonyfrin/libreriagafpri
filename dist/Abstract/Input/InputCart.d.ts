import React from 'react';
export type InputCartStylesContentProps = {
    fontSize?: string;
    padding?: string;
    width?: string;
    border?: string;
    textAlign?: string;
    outline?: string;
    borderRadius?: string;
    backgroundColor?: string;
    fontWeight?: string;
    color?: string;
    custom?: string;
};
export type InputCartProps = {
    contentStyles?: InputCartStylesContentProps;
    contentProps?: React.InputHTMLAttributes<HTMLInputElement>;
};
export declare const InputCart: ({ contentStyles, contentProps, }: InputCartProps) => React.JSX.Element;
