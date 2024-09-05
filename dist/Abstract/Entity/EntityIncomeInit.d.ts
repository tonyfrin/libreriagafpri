import React from 'react';
import { MainMenuItems } from '../Menu';
import { UseGafpriEntityReturn, UseGafpriIncomeReturn } from '../../states';
export type EntityIncomeInitStylesContainerProps = {
    maxWidht?: string;
    margin?: string;
    custom?: string;
};
export type EntityIncomeInitProps = {
    containerStyles?: EntityIncomeInitStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    useEntity: UseGafpriEntityReturn;
    useIncome: UseGafpriIncomeReturn;
    menu: MainMenuItems[];
};
export declare const EntityIncomeInit: ({ containerStyles, containerProps, useEntity, useIncome, menu, }: EntityIncomeInitProps) => JSX.Element;
