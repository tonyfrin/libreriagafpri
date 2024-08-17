import React from 'react';
import { MainMenuItems } from '../../Abstract';
import { UseGafpriIncomeReturn, UseGafpriEntityReturn } from '../../states';
export type EntityIncomeStylesContainerProps = {
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundRepeat?: string;
    height?: string;
    custom?: string;
};
export type EntityIncomeProps = {
    use: UseGafpriEntityReturn;
    useIncome: UseGafpriIncomeReturn;
    containerStyles?: EntityIncomeStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    menu: MainMenuItems[];
};
export declare const EntityIncome: ({ use, useIncome, containerStyles, containerProps, menu, }: EntityIncomeProps) => JSX.Element;
