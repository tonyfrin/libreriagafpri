import React from 'react';
export type LineHeaderTableStylesContainerProps = {
    verticalAlign?: string;
    border?: string;
    borderColor?: string;
    custom?: string;
};
export type LineHeaderTableStylesContentProps = {
    display?: string;
    custom?: string;
};
export type LineHeaderTableProps = {
    containerProps?: React.HTMLAttributes<HTMLTableSectionElement>;
    containerStyles?: LineHeaderTableStylesContainerProps;
    contentStyles?: LineHeaderTableStylesContentProps;
    contentProps?: React.HTMLAttributes<HTMLTableRowElement>;
    children: React.ReactNode;
};
export declare const LineHeaderTable: ({ containerProps, containerStyles, children, contentProps, contentStyles, }: LineHeaderTableProps) => React.JSX.Element;
