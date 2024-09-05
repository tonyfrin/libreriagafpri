import React from 'react';
import { MainMenuItems } from '../Menu';
import { UseGafpriEntityReturn, UseGafpriBudgetReturn } from '../../states';
export type EntityBudgetInitStylesContainerProps = {
    maxWidht?: string;
    margin?: string;
    custom?: string;
};
export type EntityBudgetInitProps = {
    containerStyles?: EntityBudgetInitStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    useEntity: UseGafpriEntityReturn;
    useBudget: UseGafpriBudgetReturn;
    menu: MainMenuItems[];
};
export declare const EntityBudgetInit: ({ containerStyles, containerProps, useEntity, useBudget, menu, }: EntityBudgetInitProps) => JSX.Element;
