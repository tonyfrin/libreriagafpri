import React from 'react';
import { UseGafpriBudgetReturn, UseGafpriProductsReturn, SiteOptions } from '../../states';
export type ProductBudgetStylesContainerProps = {
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundRepeat?: string;
    height?: string;
    custom?: string;
};
export type ProductBudgetProps = {
    useProduct: UseGafpriProductsReturn;
    useBudget: UseGafpriBudgetReturn;
    containerStyles?: ProductBudgetStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    sitesOptions: SiteOptions;
};
export declare const ProductBudget: ({ useProduct, useBudget, sitesOptions, containerStyles, containerProps, }: ProductBudgetProps) => JSX.Element;
