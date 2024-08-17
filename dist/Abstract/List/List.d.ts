import React, { InputHTMLAttributes } from 'react';
import type { PaginationProps } from '../Pagination';
import type { ButtonProps } from '../Button';
import type { GsSelectProps } from '../Input';
import type { ColumnListProps } from './ColumnList';
type ReactNodeArray = React.ReactNode[][];
export interface ListProps {
    items: ReactNodeArray;
    headers: string[];
    columns: number;
    selectProps?: GsSelectProps;
    selectByProps?: GsSelectProps;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
    propsPagination: PaginationProps;
    title?: string;
    actionButton?: ButtonProps;
    mainContainerStyle?: string;
    gridContainerStyle?: string;
    infoContainerStyle?: string;
    breakContainerStyle?: string;
    propsColumnList?: ColumnListProps;
}
export interface ListPropsExtended {
    items?: ReactNodeArray;
    headers?: string[];
    columns?: number;
    selectProps?: GsSelectProps;
    selectByProps?: GsSelectProps;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
    propsPagination?: PaginationProps;
    title?: string;
    actionButton?: ButtonProps;
    mainContainerStyle?: string;
    gridContainerStyle?: string;
    infoContainerStyle?: string;
    breakContainerStyle?: string;
    propsColumnList?: ColumnListProps;
}
export declare const List: React.FC<ListProps>;
export {};
