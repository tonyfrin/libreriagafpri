import React from 'react';
import { ContainerStyles } from '../Containers';
export type SpanStyle = {
    fontSize?: string;
    color?: string;
    paddingLeft?: string;
    props?: string;
};
type Media = {
    fontSize?: string | number;
};
export type ParagraphStyle = {
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
export type ParagraphProps = {
    styles?: ParagraphStyle | undefined;
    stylesSpan?: SpanStyle | undefined;
    inputProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
    paragraphClass?: string | undefined;
    containerStyles?: ContainerStyles | undefined;
    containerClass?: string | undefined;
    onChange?: (value: string) => void;
};
export declare const Paragraph: ({ styles, stylesSpan, paragraphClass, containerStyles, containerClass, inputProps, onChange, }: ParagraphProps) => React.JSX.Element;
export {};
