import React from 'react';
import { UseGafpriExpensesReturn, UseGafpriEntityReturn } from '../../states';
export type ExpensesInitStylesContainerProps = {
    maxWidht?: string;
    margin?: string;
    custom?: string;
};
export type ExpensesInitProps = {
    containerStyles?: ExpensesInitStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    useExpenses: UseGafpriExpensesReturn;
    useEntity: UseGafpriEntityReturn;
    returnInitModule: () => void;
};
export declare const ExpensesInit: ({ containerStyles, containerProps, useExpenses, useEntity, returnInitModule, }: ExpensesInitProps) => JSX.Element;
