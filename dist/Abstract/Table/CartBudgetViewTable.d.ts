import React from 'react';
import { SiteOptions } from '../../states';
import { BudgetAttributes } from '../states';
export type CartBudgetViewTableProps = {
    siteOptions: SiteOptions;
    budget: BudgetAttributes;
};
export declare const CartBudgetViewTable: ({ siteOptions, budget, }: CartBudgetViewTableProps) => React.JSX.Element;
