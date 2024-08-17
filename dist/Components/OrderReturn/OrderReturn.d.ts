import React from 'react';
import { UseGafpriOrderReturnReturn, SiteOptions, UseGafpriPaymentReturn } from '../../states';
import { HeaderMenuItem } from '../../Abstract';
export type OrderReturnStylesContainerProps = {
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundRepeat?: string;
    minHeight?: string;
    paddingTop?: string;
    paddingBottom?: string;
    custom?: string;
};
export type OrderReturnProps = {
    use: UseGafpriOrderReturnReturn;
    returnModule: () => void;
    sitesOptions: SiteOptions;
    containerStyles?: OrderReturnStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    itemsMenu: HeaderMenuItem[];
    usePayment: UseGafpriPaymentReturn;
};
export declare const OrderReturn: ({ use, returnModule, containerStyles, containerProps, itemsMenu, sitesOptions, usePayment, }: OrderReturnProps) => JSX.Element;
