import React from 'react';
import type { SiteOptions, UseGafpriBudgetReturn } from '../../states';
export type LineBudgetPrintProps = {
    useBudget: UseGafpriBudgetReturn;
    siteOptions: SiteOptions;
};
export declare const LineBudgetPrint: ({ useBudget, siteOptions, }: LineBudgetPrintProps) => React.ReactElement;
