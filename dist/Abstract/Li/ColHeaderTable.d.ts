import React from 'react';
export type ColHeaderTableStylesContainerProps = {
    custom?: string;
};
export type ColHeaderTableProps = {
    containerProps?: React.HTMLAttributes<HTMLTableCellElement>;
    containerStyles?: ColHeaderTableStylesContainerProps;
    children: React.ReactNode;
};
export declare const ColHeaderTable: ({ containerProps, containerStyles, children, }: ColHeaderTableProps) => React.JSX.Element;
