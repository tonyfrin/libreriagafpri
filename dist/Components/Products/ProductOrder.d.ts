import React from 'react';
import { UseGafpriOrderReturn, UseGafpriProductsReturn, SiteOptions } from '../../states';
export type ProductOrderStylesContainerProps = {
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundRepeat?: string;
    height?: string;
    custom?: string;
};
export type ProductOrderProps = {
    useProduct: UseGafpriProductsReturn;
    useOrder: UseGafpriOrderReturn;
    containerStyles?: ProductOrderStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    sitesOptions: SiteOptions;
};
export declare const ProductOrder: ({ useProduct, useOrder, sitesOptions, containerStyles, containerProps, }: ProductOrderProps) => JSX.Element;
