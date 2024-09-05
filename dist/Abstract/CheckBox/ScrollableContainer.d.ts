import React from 'react';
export type ScrollStyle = {
    maxWidth?: string;
    maxHeight?: string;
    overflowY?: string;
    border?: string;
    borderRadius?: string;
    padding?: string;
    margin?: string;
    customStyle?: string;
};
export type SpanStyle = {
    fontSize?: string;
    color?: string;
    paddingLeft?: string;
    props?: string;
};
export type ScrollableContainerProps = {
    styles?: ScrollStyle;
    children: React.ReactNode;
    title?: string;
    stylesSpan?: SpanStyle;
};
export declare const ScrollableContainer: ({ styles, children, title, stylesSpan, }: ScrollableContainerProps) => React.JSX.Element;
