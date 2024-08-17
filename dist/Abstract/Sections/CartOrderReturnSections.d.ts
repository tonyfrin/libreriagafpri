import React from 'react';
import { SiteOptions, UseGafpriOrderReturnReturn } from '../../states';
export type CartOrderReturnSectionsStylesContainerProps = {
    width?: string;
    padding?: string;
    borderRadius?: string;
    backgroundColor?: string;
    margin?: string;
    custom?: string;
};
export type CartOrderReturnSectionsStylesContentItemsProps = {
    display?: string;
    flexDirection?: string;
    textAlign?: string;
    custom?: string;
};
export type CartOrderReturnSectionsStylesContentOptionsProps = {
    display?: string;
    flexDirection?: string;
    custom?: string;
};
export type CartOrderReturnSectionsProps = {
    containerStyles?: CartOrderReturnSectionsStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    contentItemsStyles?: CartOrderReturnSectionsStylesContentItemsProps;
    contentItemsProps?: React.HTMLAttributes<HTMLDivElement>;
    sitesOptions: SiteOptions;
    useOrderReturn: UseGafpriOrderReturnReturn;
    contentOptionsProps?: React.HTMLAttributes<HTMLDivElement>;
};
export declare const CartOrderReturnSections: ({ containerStyles, containerProps, contentItemsStyles, contentItemsProps, contentOptionsProps, sitesOptions, useOrderReturn, }: CartOrderReturnSectionsProps) => React.JSX.Element;
