import React from 'react';
import type { SiteOptions } from '../../states';
import { UseGafpriOrderReturnReturn } from '../../states';
export type OrderReturnFormInfoHeaderProps = {
    useOrderReturn: UseGafpriOrderReturnReturn;
    siteOptions: SiteOptions;
    goPayment: () => void;
};
export declare const OrderReturnFormInfoHeader: ({ useOrderReturn, siteOptions, goPayment, }: OrderReturnFormInfoHeaderProps) => React.JSX.Element;
