import React from 'react';
import type { ButtonLargeProps } from '../Button';
import type { Menu2Props, MenuButtonProps } from '../Menu';
export interface HeaderPropsExtended {
    menuTitleProps?: Menu2Props;
    menuButtonProps?: MenuButtonProps;
    buttonLargeProps?: ButtonLargeProps;
    mainContainerStyle?: string;
    gridContainerStyle?: string;
    headContainerStyle?: string;
    titleContainerStyle?: string;
    hiddenContainerStyle?: string;
    titleStyle?: string;
}
export interface HeaderProps {
    title: string;
    menuTitleProps?: Menu2Props;
    menuButtonProps?: MenuButtonProps;
    buttonLargeProps?: ButtonLargeProps;
    mainContainerStyle?: string;
    gridContainerStyle?: string;
    headContainerStyle?: string;
    titleContainerStyle?: string;
    hiddenContainerStyle?: string;
    titleStyle?: string;
}
export declare const Header: React.FC<HeaderProps>;
