import React from 'react';
import { OrderAttributes } from '../states';
import { SiteOptions } from '../../states';
export interface OrderPendingPdfProps {
    order: OrderAttributes;
    logo: string;
    siteOptions: SiteOptions;
}
export declare const OrderPendingPdf: React.FC<OrderPendingPdfProps>;
