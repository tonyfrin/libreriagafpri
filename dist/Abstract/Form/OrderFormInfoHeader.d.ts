import React from 'react';
import type { SiteOptions } from '../../states';
import { UseGafpriOrderReturn } from '../../states';
export type OrderFormInfoHeaderProps = {
    useOrder: UseGafpriOrderReturn;
    siteOptions: SiteOptions;
};
export declare const OrderFormInfoHeader: ({ useOrder, siteOptions, }: OrderFormInfoHeaderProps) => React.JSX.Element;
