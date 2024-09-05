import React from 'react';
import { MainMenuItems } from '../../Abstract';
import { UseGafpriBudgetReturn, UseGafpriEntityReturn } from '../../states';
export type EntityBudgetStylesContainerProps = {
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundRepeat?: string;
    height?: string;
    custom?: string;
};
export type EntityBudgetProps = {
    use: UseGafpriEntityReturn;
    useBudget: UseGafpriBudgetReturn;
    containerStyles?: EntityBudgetStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    menu: MainMenuItems[];
};
export declare const EntityBudget: ({ use, useBudget, containerStyles, containerProps, menu, }: EntityBudgetProps) => JSX.Element;
