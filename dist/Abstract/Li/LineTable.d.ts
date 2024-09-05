import React from 'react';
export type LineTableStylesContainerProps = {
    custom?: string;
};
interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    key?: string;
}
export type LineTableProps = {
    containerProps?: TableRowProps;
    containerStyles?: LineTableStylesContainerProps;
    children: React.ReactNode;
};
export declare const LineTable: ({ containerProps, containerStyles, children, }: LineTableProps) => React.JSX.Element;
export {};
