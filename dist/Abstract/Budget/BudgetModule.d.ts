import React, { KeyboardEvent } from 'react';
import { UseGafpriBudgetReturn, SiteOptions, UseGafpriProductsReturn } from '../../states';
export type BudgetModuleProps = {
    useBudget: UseGafpriBudgetReturn;
    sitesOptions: SiteOptions;
    useProducts: UseGafpriProductsReturn;
    uploadBudget: (event: KeyboardEvent<HTMLInputElement>) => void;
};
export declare const BudgetModule: ({ useBudget, sitesOptions, useProducts, uploadBudget, }: BudgetModuleProps) => React.JSX.Element;
