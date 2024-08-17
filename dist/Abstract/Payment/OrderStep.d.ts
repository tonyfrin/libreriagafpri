import React from 'react';
import { UseGafpriPaymentReturn, UseGafpriOrderReturn, SiteOptions } from '../../states';
type OrderStylesContainerProps = {
    display?: string;
    justifyContent?: string;
    marginTop?: string;
    custom?: string;
};
type OrderStepContentStylesProps = {
    backgroundColor?: string;
    padding?: string;
    width?: string;
    borderRadius?: string;
    height?: string;
    margin?: string;
    custom?: string;
};
export type OrderStepProps = {
    use: UseGafpriPaymentReturn;
    useOrder: UseGafpriOrderReturn;
    siteOptions: SiteOptions;
    containerStyles?: OrderStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    contentStyles?: OrderStepContentStylesProps;
    contentProps?: React.HTMLAttributes<HTMLDivElement>;
};
export declare const OrderStep: ({ use, useOrder, siteOptions, containerStyles, containerProps, contentStyles, contentProps, }: OrderStepProps) => JSX.Element;
export {};
