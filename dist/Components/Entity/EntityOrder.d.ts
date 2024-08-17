import React from 'react';
import { MainMenuItems } from '../../Abstract';
import { UseGafpriOrderReturn, UseGafpriEntityReturn } from '../../states';
export type EntityOrderStylesContainerProps = {
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundRepeat?: string;
    height?: string;
    custom?: string;
};
export type EntityOrderProps = {
    use: UseGafpriEntityReturn;
    useOrder: UseGafpriOrderReturn;
    containerStyles?: EntityOrderStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    menu: MainMenuItems[];
};
export declare const EntityOrder: ({ use, useOrder, containerStyles, containerProps, menu, }: EntityOrderProps) => JSX.Element;
