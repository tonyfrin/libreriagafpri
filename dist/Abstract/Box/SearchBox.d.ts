import React from 'react';
import type { Title1Props, Title2Props } from '../Title';
export type SearchBoxStylesContainerProps = {
    padding?: string;
    width?: string;
    borderRadius?: string;
    backgroundColor?: string;
    margin?: string;
    custom?: string;
};
export type SearchBoxStylesContentProps = {
    custom?: string;
};
export type SearchBoxProps = {
    containerStyles?: SearchBoxStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLFormElement>;
    contentStyles?: SearchBoxStylesContentProps;
    contentProps?: React.HTMLAttributes<HTMLDivElement>;
    title1Props: Title1Props;
    title2Props: Title2Props;
    children: React.ReactNode;
};
export declare const SearchBox: ({ containerStyles, containerProps, contentStyles, contentProps, title1Props, title2Props, children, }: SearchBoxProps) => React.JSX.Element;
