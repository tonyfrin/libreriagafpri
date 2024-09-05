import React from 'react';
export type LineCol1StylesContainerProps = {
    width?: string;
    custom?: string;
};
export type LineCol1StylesContentProps = {
    margin?: string;
    custom?: string;
};
export type LineCol1Props = {
    containerProps?: React.HTMLAttributes<HTMLTableCellElement>;
    containerStyles?: LineCol1StylesContainerProps;
    children: React.ReactNode;
};
export declare const LineCol1: ({ containerProps, containerStyles, children, }: LineCol1Props) => React.JSX.Element;
