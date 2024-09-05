import React from 'react';
import type { UseGafpriEntityReturn, UseGafpriExpensesReturn } from '../../states';
export type EntityExpensesSearchFormStaylesContainerProps = {
    color?: string;
    fontSize?: string;
    paddingBottom?: string;
    custom?: string;
};
export type EntityExpensesSearchFormProps = {
    containerStyles?: EntityExpensesSearchFormStaylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    useExpenses: UseGafpriExpensesReturn;
    useEntity: UseGafpriEntityReturn;
    returnInitModule: () => void;
};
export declare const EntityExpensesSearchForm: ({ containerStyles, containerProps, useExpenses, useEntity, returnInitModule, }: EntityExpensesSearchFormProps) => React.JSX.Element;
