import React from 'react';
import { UseGafpriBudgetReturn, SiteOptions } from '../../states';
export type BudgetViewProps = {
    useBudget: UseGafpriBudgetReturn;
    sitesOptions: SiteOptions;
    logoPdf: string;
};
export declare const BudgetView: ({ useBudget, sitesOptions, logoPdf, }: BudgetViewProps) => React.JSX.Element;
