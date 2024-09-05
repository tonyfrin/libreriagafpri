import React from 'react';
import { UseGafpriBankTypeReturn, SiteOptions, UseCurrenciesReturn } from '../../states';
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
export type BankProps = {
    use: UseGafpriBankTypeReturn;
    useCurrencies: UseCurrenciesReturn;
    containerStyles?: OrderStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    itemsMenu: HeaderMenuItem[];
    siteOptions: SiteOptions;
    entityMenu: MainMenuItems[];
    returnModule: () => void;
};
export declare const Bank: ({ use, useCurrencies, containerStyles, containerProps, itemsMenu, siteOptions, entityMenu, returnModule, }: BankProps) => JSX.Element;
