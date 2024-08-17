import React from 'react';
import type { SiteOptions, UseGafpriBudgetReturn } from '../../states';
export type LineProductBudgetCartProps = {
    useBudget: UseGafpriBudgetReturn;
    siteOptions: SiteOptions;
};
export declare const LineProductBudgetCart: ({ useBudget, siteOptions, }: LineProductBudgetCartProps) => React.ReactElement;
