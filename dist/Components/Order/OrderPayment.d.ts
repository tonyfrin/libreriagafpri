import React from 'react';
import { UseGafpriPaymentReturn, SiteOptions, UseGafpriOrderReturn } from '../../states';
export type OrderStylesContainerProps = {
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundRepeat?: string;
    minHeight?: string;
    paddingTop?: string;
    paddingBottom?: string;
    custom?: string;
};
export type OrderPaymentProps = {
    use: UseGafpriPaymentReturn;
    siteOptions: SiteOptions;
    useOrder: UseGafpriOrderReturn;
    logoPdf: string;
    containerStyles?: OrderStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
};
export declare const OrderPayment: ({ use, siteOptions, useOrder, logoPdf, containerStyles, containerProps, }: OrderPaymentProps) => JSX.Element;
