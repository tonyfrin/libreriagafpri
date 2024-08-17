import React from 'react';
export type SimpleTableStylesContainerProps = {
    padding?: string;
    margin?: string;
    width?: string;
    custom?: string;
};
export type SimpleTableStylesContentProps = {
    width?: string;
    marginBotton?: string;
    borderColor?: string;
    textAlign?: string;
    fontSize?: string;
    borderTop?: string;
    borderBottom?: string;
    custom?: string;
};
export interface SimpleTableProps {
    header?: React.ReactNode;
    body?: React.ReactNode;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    containerStyles?: SimpleTableStylesContainerProps;
    contentStyles?: SimpleTableStylesContentProps;
    contentProps?: React.HTMLAttributes<HTMLTableElement>;
}
export declare const SimpleTable: ({ header, body, containerProps, containerStyles, contentStyles, contentProps, }: SimpleTableProps) => React.JSX.Element;
