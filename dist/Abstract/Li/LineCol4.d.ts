import React from 'react';
export type LineCol4StylesContainerProps = {
    width?: string;
    custom?: string;
};
export type LineCol4StylesContentProps = {
    margin?: string;
    custom?: string;
};
export type LineCol4Props = {
    containerProps?: React.HTMLAttributes<HTMLTableCellElement>;
    containerStyles?: LineCol4StylesContainerProps;
    children: React.ReactNode;
};
export declare const LineCol4: ({ containerProps, containerStyles, children, }: LineCol4Props) => React.JSX.Element;
