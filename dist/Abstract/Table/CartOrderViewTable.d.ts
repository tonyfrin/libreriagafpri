import React from 'react';
import { SiteOptions } from '../../states';
import { OrderAttributes } from '../states';
export type CartOrderViewTableProps = {
    siteOptions: SiteOptions;
    order: OrderAttributes;
};
export declare const CartOrderViewTable: ({ siteOptions, order, }: CartOrderViewTableProps) => React.JSX.Element;
