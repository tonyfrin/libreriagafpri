import React from 'react';
import type { UseGafpriEntityReturn, UseGafpriIncomeReturn } from '../../states';
export type EntityIncomeSearchFormStaylesContainerProps = {
    color?: string;
    fontSize?: string;
    paddingBottom?: string;
    custom?: string;
};
export type EntityIncomeSearchFormProps = {
    containerStyles?: EntityIncomeSearchFormStaylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    useIncome: UseGafpriIncomeReturn;
    useEntity: UseGafpriEntityReturn;
    returnInitModule: () => void;
};
export declare const EntityIncomeSearchForm: ({ containerStyles, containerProps, useIncome, useEntity, returnInitModule, }: EntityIncomeSearchFormProps) => React.JSX.Element;
