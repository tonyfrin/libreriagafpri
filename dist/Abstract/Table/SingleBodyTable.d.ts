import React from 'react';
type ReactNodeArray = React.ReactNode[][];
type SingleTableContainerProps = {
    width?: string;
    minHeight?: string;
    overflow?: string;
    custom?: string;
};
export interface SingleBodyTableProps {
    data: ReactNodeArray;
    containerStyles?: SingleTableContainerProps;
}
export declare const SingleBodyTable: React.FC<SingleBodyTableProps>;
export {};
