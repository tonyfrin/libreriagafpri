import React from 'react';
import type { SiteOptions } from '../../states';
import { BudgetAttributes } from '../states';
export type LineProductBudgetViewCartProps = {
    budget: BudgetAttributes;
    siteOptions: SiteOptions;
};
export declare const LineProductBudgetViewCart: ({ budget, siteOptions, }: LineProductBudgetViewCartProps) => React.ReactElement;
