import React from 'react';
import { UseGafpriCashRegisterTypeReturn, SiteOptions, UseLoginReturn, UseGafpriExpensesReturn, UseCurrenciesReturn, UseGafpriEntityReturn, UseGafpriPaymentTransferCashRegisterReturn, UseGafpriIncomeReturn } from '../../states';
import { HeaderMenuItem, MainMenuItems } from '../../Abstract';
export type OrderStylesContainerProps = {
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundRepeat?: string;
    minHeight?: string;
    paddingTop?: string;
    paddingBottom?: string;
    custom?: string;
};
export type CashRegisterProps = {
    use: UseGafpriCashRegisterTypeReturn;
    containerStyles?: OrderStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    itemsMenu: HeaderMenuItem[];
    siteOptions: SiteOptions;
    useExpenses: UseGafpriExpensesReturn;
    useCurrencies: UseCurrenciesReturn;
    useEntity: UseGafpriEntityReturn;
    entityMenu: MainMenuItems[];
    usePaymentTransferCashRegister: UseGafpriPaymentTransferCashRegisterReturn;
    useIncome: UseGafpriIncomeReturn;
    useLogin: UseLoginReturn;
    returnModule: () => void;
};
export declare const CashRegister: ({ use, containerStyles, containerProps, itemsMenu, siteOptions, useExpenses, useCurrencies, useEntity, entityMenu, usePaymentTransferCashRegister, useIncome, useLogin, returnModule, }: CashRegisterProps) => JSX.Element;
