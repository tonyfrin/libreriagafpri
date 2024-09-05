import React from 'react';
import { IconType } from 'react-icons';
export interface MenuItem {
    id: string;
    label: string;
    onClick: () => void;
    icon: IconType;
}
export interface MenuButtonProps {
    items: MenuItem[];
    mainContainerStyle?: string;
    itemContainerStyle?: string;
    iconGeneralContainerStyle?: string;
    iconContainerStyle?: string;
    iconStyle?: string;
    titleContainer?: string;
    titleStyle?: string;
}
export declare const MenuButton: React.FC<MenuButtonProps>;
