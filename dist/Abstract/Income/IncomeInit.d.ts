import React from 'react';
import { UseGafpriIncomeReturn, UseGafpriEntityReturn } from '../../states';
export type IncomeInitStylesContainerProps = {
    maxWidht?: string;
    margin?: string;
    custom?: string;
};
export type IncomeInitProps = {
    containerStyles?: IncomeInitStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    useIncome: UseGafpriIncomeReturn;
    useEntity: UseGafpriEntityReturn;
    returnInitModule: () => void;
};
export declare const IncomeInit: ({ containerStyles, containerProps, useIncome, useEntity, returnInitModule, }: IncomeInitProps) => JSX.Element;
