import React from 'react';
import { ListProps } from './List';
export type DivListListContainerStyle = {
    borderTop?: string;
    paddingTop?: string;
    width?: string;
    marginTop?: string;
    customStyles?: string;
};
export type ListContainerProps = {
    divStiles?: DivListListContainerStyle;
    propsList: ListProps;
};
export declare const ListContainer: ({ divStiles, propsList, }: ListContainerProps) => React.JSX.Element;
