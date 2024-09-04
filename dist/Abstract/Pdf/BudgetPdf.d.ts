import React from 'react';
import { BudgetAttributes } from '../states';
import { SiteOptions } from '../../states';
export interface BudgetPdfProps {
    budget: BudgetAttributes;
    logo: string;
    siteOptions: SiteOptions;
}
export declare const BudgetPdf: React.FC<BudgetPdfProps>;
