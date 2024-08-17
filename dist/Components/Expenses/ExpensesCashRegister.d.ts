import React from 'react';
import { UseGafpriExpensesReturn, UseGafpriEntityReturn, SiteOptions, UseCurrenciesReturn } from '../../states';
import { MainMenuItems } from '../../Abstract';
export type ExpensesCashRegisterStylesContainerProps = {
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundRepeat?: string;
    height?: string;
    custom?: string;
};
export type ExpensesCashRegisterProps = {
    use: UseGafpriExpensesReturn;
    useEntity: UseGafpriEntityReturn;
    useCurrencies: UseCurrenciesReturn;
    returnInitModule: () => void;
    sitesOptions: SiteOptions;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    menuEntity: MainMenuItems[];
};
export declare const ExpensesCashRegister: ({ use, useEntity, useCurrencies, returnInitModule, containerProps, sitesOptions, menuEntity, }: ExpensesCashRegisterProps) => JSX.Element;
