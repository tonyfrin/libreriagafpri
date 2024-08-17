import React from 'react';
import { MainMenuItems } from '../Menu';
import { UseGafpriEntityReturn, UseGafpriExpensesReturn } from '../../states';
export type EntityExpensesInitStylesContainerProps = {
    maxWidht?: string;
    margin?: string;
    custom?: string;
};
export type EntityExpensesInitProps = {
    containerStyles?: EntityExpensesInitStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    useEntity: UseGafpriEntityReturn;
    useExpenses: UseGafpriExpensesReturn;
    menu: MainMenuItems[];
};
export declare const EntityExpensesInit: ({ containerStyles, containerProps, useEntity, useExpenses, menu, }: EntityExpensesInitProps) => JSX.Element;
