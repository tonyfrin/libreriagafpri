import React, { KeyboardEvent } from 'react';
import { SiteOptions, UseGafpriBudgetReturn, UseGafpriProductsReturn } from '../../states';
export type CartBudgetSectionsStylesContainerProps = {
    width?: string;
    padding?: string;
    borderRadius?: string;
    backgroundColor?: string;
    margin?: string;
    custom?: string;
};
export type CartBudgetSectionsStylesContentItemsProps = {
    display?: string;
    flexDirection?: string;
    textAlign?: string;
    custom?: string;
};
export type CartBudgetSectionsStylesContentOptionsProps = {
    display?: string;
    flexDirection?: string;
    custom?: string;
};
export type CartBudgetSectionsProps = {
    containerStyles?: CartBudgetSectionsStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    contentItemsStyles?: CartBudgetSectionsStylesContentItemsProps;
    contentItemsProps?: React.HTMLAttributes<HTMLDivElement>;
    sitesOptions: SiteOptions;
    useBudget: UseGafpriBudgetReturn;
    useProducts: UseGafpriProductsReturn;
    contentOptionsStyles?: CartBudgetSectionsStylesContentOptionsProps;
    contentOptionsProps?: React.HTMLAttributes<HTMLDivElement>;
    uploadBudget: (event: KeyboardEvent<HTMLInputElement>) => void;
};
export declare const CartBudgetSections: ({ containerStyles, containerProps, contentItemsStyles, contentItemsProps, contentOptionsStyles, contentOptionsProps, sitesOptions, useBudget, useProducts, uploadBudget, }: CartBudgetSectionsProps) => React.JSX.Element;
