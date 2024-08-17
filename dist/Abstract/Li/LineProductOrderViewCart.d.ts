import React from 'react';
import type { SiteOptions } from '../../states';
import { OrderAttributes } from '../states';
export type LineProductOrderViewCartProps = {
    order: OrderAttributes;
    siteOptions: SiteOptions;
};
export declare const LineProductOrderViewCart: ({ order, siteOptions, }: LineProductOrderViewCartProps) => React.ReactElement;
