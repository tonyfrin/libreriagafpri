import React, { ButtonHTMLAttributes } from 'react';
type Media = {
    fontSize?: string | number;
};
export type ButtonStyle = {
    margin?: string;
    height?: string;
    backgroundColor?: string;
    fontSize?: string;
    borderRadius?: string;
    padding?: string;
    userSelect?: string;
    textAlign?: string;
    textDecoration?: string;
    verticalAlign?: string;
    display?: string;
    fontWeight?: string;
    lineHeight?: string;
    color?: string;
    cursor?: string;
    boxShadow?: string;
    media800Style?: Media | undefined;
    media750Style?: Media | undefined;
    media400Style?: Media | undefined;
    media300Style?: Media | undefined;
};
export type ButtonProps = {
    styles?: ButtonStyle | undefined;
    Class?: string;
    title: React.ReactNode;
    buttonProps?: ButtonHTMLAttributes<HTMLButtonElement> | undefined;
};
export type ButtonPropsExtended = {
    styles?: ButtonStyle;
    Class?: string;
    buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
};
export declare const Button: ({ styles, buttonProps, Class, title, }: ButtonProps) => React.JSX.Element;
export {};
