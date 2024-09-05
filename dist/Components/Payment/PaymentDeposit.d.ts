import React from 'react';
import { UseGafpriPaymentReturn, SiteOptions, UseGafpriOrderReturn, UseCurrenciesReturn, UseGafpriBankTypeReturn, UseGafpriAccountsReceivableReturn } from '../../states';
import { PaymentMethodsImages } from '../../Abstract';
export type OrderStylesContainerProps = {
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundRepeat?: string;
    minHeight?: string;
    paddingTop?: string;
    paddingBottom?: string;
    custom?: string;
};
export type PaymentDepositProps = {
    use: UseGafpriPaymentReturn;
    siteOptions: SiteOptions;
    useOrder: UseGafpriOrderReturn;
    useCredits: UseGafpriAccountsReceivableReturn;
    useCurrencies: UseCurrenciesReturn;
    useBankType: UseGafpriBankTypeReturn;
    logoPdf: string;
    containerStyles?: OrderStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    images: PaymentMethodsImages;
};
export declare const PaymentDeposit: ({ use, siteOptions, useOrder, useCredits, useCurrencies, useBankType, logoPdf, containerStyles, containerProps, images, }: PaymentDepositProps) => JSX.Element;
