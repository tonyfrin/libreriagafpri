import React from 'react';
import type { SiteOptions, UseGafpriOrderReturn } from '../../states';
export type LineProductCartProps = {
    useOrder: UseGafpriOrderReturn;
    siteOptions: SiteOptions;
};
export declare const LineProductCart: ({ useOrder, siteOptions, }: LineProductCartProps) => React.ReactElement;
