import React from 'react';
import { SiteOptions } from '../../states';
import { BudgetAttributes } from '../states';
export type CartBudgetViewSectionsStylesContainerProps = {
    width?: string;
    padding?: string;
    borderRadius?: string;
    backgroundColor?: string;
    margin?: string;
    custom?: string;
};
export type CartBudgetViewSectionsStylesContentItemsProps = {
    display?: string;
    flexDirection?: string;
    textAlign?: string;
    custom?: string;
};
export type CartBudgetViewSectionsStylesContentOptionsProps = {
    display?: string;
    flexDirection?: string;
    custom?: string;
};
export type CartBudgetViewSectionsProps = {
    containerStyles?: CartBudgetViewSectionsStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    contentItemsStyles?: CartBudgetViewSectionsStylesContentItemsProps;
    contentItemsProps?: React.HTMLAttributes<HTMLDivElement>;
    sitesOptions: SiteOptions;
    budget: BudgetAttributes;
};
export declare const CartBudgetViewSections: ({ containerStyles, containerProps, contentItemsStyles, contentItemsProps, sitesOptions, budget, }: CartBudgetViewSectionsProps) => React.JSX.Element;
