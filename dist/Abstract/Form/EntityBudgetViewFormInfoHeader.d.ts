import React from 'react';
import type { BudgetAttributes } from '../states';
import { UseGafpriBudgetReturn } from '../../states';
export type EntityBudgetViewFormInfoHeaderProps = {
    budget: BudgetAttributes;
    useBudget: UseGafpriBudgetReturn;
};
export declare const EntityBudgetViewFormInfoHeader: ({ budget, useBudget, }: EntityBudgetViewFormInfoHeaderProps) => React.JSX.Element;
