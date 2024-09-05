import React from 'react';
export type SpanValueStylesContentProps = {
    margin?: string;
    custom?: string;
};
export type SpanValueProps = {
    value: string;
    containerProps?: React.HTMLAttributes<HTMLSpanElement>;
    containerStyles?: SpanValueStylesContentProps;
};
export declare const SpanValue: ({ value, containerProps, containerStyles, }: SpanValueProps) => React.JSX.Element;
