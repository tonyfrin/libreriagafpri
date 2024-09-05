import React from 'react';
import { IconType } from 'react-icons';
interface MenuItem {
    id: string;
    label: string;
    onClick: () => void;
    icon: IconType;
}
export interface Menu1Props {
    items: MenuItem[];
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    mainContainerStyle?: string;
    listContainerStyle?: string;
    itemContainerStyle?: string;
    iconStyle?: string;
    textStyle?: string;
    hamburgerButtonStyle?: string;
}
export declare const Menu1: React.FC<Menu1Props>;
export {};
