import React from 'react';
import { SiteOptions } from '../../states';
import { OrderAttributes } from '../states';
export type CartOrderViewSectionsStylesContainerProps = {
    width?: string;
    padding?: string;
    borderRadius?: string;
    backgroundColor?: string;
    margin?: string;
    custom?: string;
};
export type CartOrderViewSectionsStylesContentItemsProps = {
    display?: string;
    flexDirection?: string;
    textAlign?: string;
    custom?: string;
};
export type CartOrderViewSectionsStylesContentOptionsProps = {
    display?: string;
    flexDirection?: string;
    custom?: string;
};
export type CartOrderViewSectionsProps = {
    containerStyles?: CartOrderViewSectionsStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    contentItemsStyles?: CartOrderViewSectionsStylesContentItemsProps;
    contentItemsProps?: React.HTMLAttributes<HTMLDivElement>;
    sitesOptions: SiteOptions;
    order: OrderAttributes;
};
export declare const CartOrderViewSections: ({ containerStyles, containerProps, contentItemsStyles, contentItemsProps, sitesOptions, order, }: CartOrderViewSectionsProps) => React.JSX.Element;
