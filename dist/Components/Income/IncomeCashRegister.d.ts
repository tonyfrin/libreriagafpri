import React from 'react';
import { UseGafpriIncomeReturn, UseGafpriEntityReturn, SiteOptions, UseCurrenciesReturn } from '../../states';
import { MainMenuItems } from '../../Abstract';
export type IncomeCashRegisterStylesContainerProps = {
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundRepeat?: string;
    height?: string;
    custom?: string;
};
export type IncomeCashRegisterProps = {
    use: UseGafpriIncomeReturn;
    useEntity: UseGafpriEntityReturn;
    useCurrencies: UseCurrenciesReturn;
    returnInitModule: () => void;
    sitesOptions: SiteOptions;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    menuEntity: MainMenuItems[];
};
export declare const IncomeCashRegister: ({ use, useEntity, useCurrencies, returnInitModule, containerProps, sitesOptions, menuEntity, }: IncomeCashRegisterProps) => JSX.Element;
