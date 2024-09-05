import React from 'react';
import type { SiteOptions } from '../../states';
import { BudgetAttributes } from '../states';
export type BudgetViewFormInfoHeaderProps = {
    budget: BudgetAttributes;
    siteOptions: SiteOptions;
    logoPdf: string;
};
export declare const BudgetViewFormInfoHeader: ({ budget, siteOptions, logoPdf, }: BudgetViewFormInfoHeaderProps) => React.JSX.Element;
