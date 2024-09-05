import React from 'react';
import { UseGafpriOrderReturnReturn, SiteOptions, UseGafpriPaymentReturn } from '../../states';
export type SalesReturnProps = {
    use: UseGafpriOrderReturnReturn;
    sitesOptions: SiteOptions;
    usePayment: UseGafpriPaymentReturn;
};
export declare const SalesReturn: ({ use, sitesOptions, usePayment, }: SalesReturnProps) => React.JSX.Element;
