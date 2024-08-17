import React from 'react';
import { IconType } from 'react-icons';
export interface MenuItem {
    id: string;
    label: string;
    onClick: () => void;
    icon: IconType;
}
export interface Menu2Props {
    items: MenuItem[];
    mainContainerStyle?: string;
    itemContainerStyle?: string;
    buttonStyle?: string;
    buttonContentContainerStyle?: string;
    iconStyle?: string;
    textStyle?: string;
}
export declare const Menu2: React.FC<Menu2Props>;
