import React from 'react';
import { PaginationProps } from '../Pagination';
type SingleListContainerStylesProps = {
    transition?: string;
    background?: string;
    fontSize?: string;
    margin?: string;
    padding?: string;
    border?: string;
    verticalAlign?: string;
    borderSpacing?: string;
    borderCollapse?: string;
    custom?: string;
};
type ReactNodeArray = React.ReactNode[][];
export interface SingleListProps {
    items: ReactNodeArray;
    headers: string[];
    propsPagination: PaginationProps;
    containerStyle?: SingleListContainerStylesProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
}
export declare const SingleList: React.FC<SingleListProps>;
export {};
