import React from 'react';
type ReactNodeArray = React.ReactNode[];
export interface ColumnListProps {
    items: ReactNodeArray[];
    columns: number;
    headers: string[];
    mainContainerStyle?: string;
    headerContainerStyle?: string;
    headerStyle?: string;
    itemsContainerStyle?: string;
    itemStyle?: string;
}
export declare const ColumnList: React.FC<ColumnListProps>;
export {};
