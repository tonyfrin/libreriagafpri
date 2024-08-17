import React from 'react';
import { MainMenuItems } from '../Menu';
import { UseGafpriEntityReturn, UseGafpriOrderReturn } from '../../states';
export type EntityOrderInitStylesContainerProps = {
    maxWidht?: string;
    margin?: string;
    custom?: string;
};
export type EntityOrderInitProps = {
    containerStyles?: EntityOrderInitStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    useEntity: UseGafpriEntityReturn;
    useOrder: UseGafpriOrderReturn;
    menu: MainMenuItems[];
};
export declare const EntityOrderInit: ({ containerStyles, containerProps, useEntity, useOrder, menu, }: EntityOrderInitProps) => JSX.Element;
