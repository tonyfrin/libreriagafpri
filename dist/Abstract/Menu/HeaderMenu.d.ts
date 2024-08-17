import React, { HTMLAttributes } from 'react';
import { CircleButtonPropsExtended } from '../Button';
export type HeaderMenuItem = {
    key: string;
    image: string;
    title: string;
    onClick?: () => void;
};
export type HeaderMenuStylesContainerProps = {
    paddingBottom?: string;
    marginTop?: string;
    maxWidth?: string;
    margin?: string;
    custom?: string;
};
export type HeaderMenuStylesContentProps = {
    width?: string;
    margin?: string;
    custom?: string;
};
export type HeaderMenuStylesContentUlProps = {
    display?: string;
    padding?: string;
    justifyContent?: string;
    custom?: string;
};
export type HeaderMenuStylesContentLiProps = {
    listStyle?: string;
    custom?: string;
};
export type HeaderMenuProps = {
    items: HeaderMenuItem[];
    stylesContainer?: HeaderMenuStylesContainerProps;
    containerProps?: HTMLAttributes<HTMLDivElement>;
    stylesContent?: HeaderMenuStylesContentProps;
    contentProps?: HTMLAttributes<HTMLDivElement>;
    contentUlProps?: HTMLAttributes<HTMLUListElement>;
    stylesContentUl?: HeaderMenuStylesContentUlProps;
    stylesContentLi?: HeaderMenuStylesContentLiProps;
    contentLiProps?: HTMLAttributes<HTMLLIElement>;
    contentButtonProps?: CircleButtonPropsExtended;
};
export type HeaderMenuPropsExtended = {
    stylesContainer?: HeaderMenuStylesContainerProps;
    containerProps?: HTMLAttributes<HTMLUListElement>;
    stylesContent?: HeaderMenuStylesContentProps;
    contentProps?: HTMLAttributes<HTMLLIElement>;
    contentUlProps?: HTMLAttributes<HTMLUListElement>;
    stylesContentUl?: HeaderMenuStylesContentUlProps;
    stylesContentLi?: HeaderMenuStylesContentLiProps;
    contentLiProps?: HTMLAttributes<HTMLLIElement>;
    contentButtonProps?: CircleButtonPropsExtended;
};
export declare const HeaderMenu: ({ items, stylesContainer, containerProps, stylesContent, contentProps, contentUlProps, stylesContentUl, stylesContentLi, contentLiProps, contentButtonProps, }: HeaderMenuProps) => React.JSX.Element;
