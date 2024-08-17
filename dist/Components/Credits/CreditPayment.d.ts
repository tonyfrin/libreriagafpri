import React from 'react';
import { UseGafpriPaymentReturn, SiteOptions, UseGafpriOrderReturn, UseGafpriAccountsReceivableReturn } from '../../states';
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
export type CreditPaymentProps = {
    use: UseGafpriPaymentReturn;
    siteOptions: SiteOptions;
    useCredits: UseGafpriAccountsReceivableReturn;
    logoPdf: string;
    containerStyles?: OrderStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    useOrder: UseGafpriOrderReturn;
    images: PaymentMethodsImages;
};
export declare const CreditPayment: ({ use, useOrder, siteOptions, useCredits, logoPdf, containerStyles, containerProps, images, }: CreditPaymentProps) => JSX.Element;
