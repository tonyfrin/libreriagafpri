import React from 'react';
type ReactNodeArray = React.ReactNode[][];
type SingleTableContainerProps = {
    width?: string;
    minHeight?: string;
    overflow?: string;
    custom?: string;
};
export interface SingleTableProps {
    headers: string[];
    data: ReactNodeArray;
    containerStyles?: SingleTableContainerProps;
}
export declare const SingleTable: React.FC<SingleTableProps>;
export {};
