import React from 'react';
import { MainMenuItems } from '../../Abstract';
import { UseGafpriExpensesReturn, UseGafpriEntityReturn } from '../../states';
export type EntityExpensesStylesContainerProps = {
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundRepeat?: string;
    height?: string;
    custom?: string;
};
export type EntityExpensesProps = {
    use: UseGafpriEntityReturn;
    useExpenses: UseGafpriExpensesReturn;
    containerStyles?: EntityExpensesStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    menu: MainMenuItems[];
};
export declare const EntityExpenses: ({ use, useExpenses, containerStyles, containerProps, menu, }: EntityExpensesProps) => JSX.Element;
