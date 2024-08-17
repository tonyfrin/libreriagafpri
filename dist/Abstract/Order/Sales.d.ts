import React, { KeyboardEvent } from 'react';
import { UseGafpriOrderReturn, SiteOptions, UseGafpriProductsReturn } from '../../states';
export type SalesProps = {
    useOrder: UseGafpriOrderReturn;
    sitesOptions: SiteOptions;
    useProducts: UseGafpriProductsReturn;
    uploadOrder: (event: KeyboardEvent<HTMLInputElement>) => void;
};
export declare const Sales: ({ useOrder, sitesOptions, useProducts, uploadOrder, }: SalesProps) => React.JSX.Element;
