import React from 'react';
import { SiteOptions, UseGafpriBudgetReturn } from '../../states';
export type CartBudgetTableProps = {
    siteOptions: SiteOptions;
    useBudget: UseGafpriBudgetReturn;
};
export declare const CartBudgetTable: ({ siteOptions, useBudget, }: CartBudgetTableProps) => React.JSX.Element;
