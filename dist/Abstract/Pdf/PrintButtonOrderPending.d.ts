import React from 'react';
import { SiteOptions } from '../../states';
import { OrderAttributes } from '../states';
export type PrintButtonOrderPendingProps = {
    order: OrderAttributes;
    siteOptions: SiteOptions;
    logoPdf: string;
};
export declare const PrintButtonOrderPending: ({ order, siteOptions, logoPdf, }: PrintButtonOrderPendingProps) => React.JSX.Element;
