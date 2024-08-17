import React, { HTMLAttributes } from 'react';
export type MainMenuItem = {
    key: string;
    image: string;
    title: string;
    onClick?: () => void;
};
export type MainMenuItems = MainMenuItem[];
export type MainMenuStylesContainerProps = {
    display?: string;
    justifyContent?: string;
    margin?: string;
    custom?: string;
};
export type MainMenuStylesContentProps = {
    textAling?: string;
    listStyle?: string;
    custom?: string;
};
export type MainMenuProps = {
    items: MainMenuItems[];
    stylesContainer?: MainMenuStylesContainerProps;
    containerProps?: HTMLAttributes<HTMLUListElement>;
    stylesContent?: MainMenuStylesContentProps;
    contentProps?: HTMLAttributes<HTMLLIElement>;
};
export type MainMenuPropsExtended = {
    stylesContainer?: MainMenuStylesContainerProps;
    containerProps?: HTMLAttributes<HTMLUListElement>;
    stylesContent?: MainMenuStylesContentProps;
    contentProps?: HTMLAttributes<HTMLLIElement>;
};
export declare const MainMenu: ({ items, stylesContainer, containerProps, stylesContent, contentProps, }: MainMenuProps) => React.JSX.Element;
