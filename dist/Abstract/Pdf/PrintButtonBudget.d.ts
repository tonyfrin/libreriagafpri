import React from 'react';
import { SiteOptions } from '../../states';
import { BudgetAttributes } from '../states';
export type PrintButtonBudgetProps = {
    budget: BudgetAttributes;
    siteOptions: SiteOptions;
    logoPdf: string;
};
export declare const PrintButtonBudget: ({ budget, siteOptions, logoPdf, }: PrintButtonBudgetProps) => React.JSX.Element;
