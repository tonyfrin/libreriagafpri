import React from 'react';
import { IconType } from 'react-icons';
interface MenuItemProps {
    label: string;
    onClick: () => void;
    icon?: IconType;
}
export interface HorizontalMenuProps {
    items: MenuItemProps[];
}
export declare const HorizontalMenu: React.FC<HorizontalMenuProps>;
export {};
