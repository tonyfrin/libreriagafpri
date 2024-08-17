import React from 'react';
import type { SiteOptions } from '../../states';
import { OrderAttributes } from '../states';
export type OrderViewFormInfoHeaderProps = {
    order: OrderAttributes;
    siteOptions: SiteOptions;
    logoPdf: string;
};
export declare const OrderViewFormInfoHeader: ({ order, siteOptions, logoPdf, }: OrderViewFormInfoHeaderProps) => React.JSX.Element;
