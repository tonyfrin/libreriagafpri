import React from 'react';
export type LineCol2StylesContainerProps = {
    width?: string;
    custom?: string;
};
export type LineCol2StylesContentProps = {
    margin?: string;
    custom?: string;
};
export type LineCol2Props = {
    containerProps?: React.HTMLAttributes<HTMLTableCellElement>;
    containerStyles?: LineCol2StylesContainerProps;
    children: React.ReactNode;
};
export declare const LineCol2: ({ containerProps, containerStyles, children, }: LineCol2Props) => React.JSX.Element;
