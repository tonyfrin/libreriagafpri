import React, { KeyboardEvent } from 'react';
import { UseGafpriProductsReturn, UseGafpriOrderReturn, UseGafpriEntityReturn, SiteOptions } from '../../states';
import { HeaderMenuItem, MainMenuItems, UseGafpriPagesSalesModuleReturn } from '../../Abstract';
export type OrderStylesContainerProps = {
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundRepeat?: string;
    minHeight?: string;
    paddingTop?: string;
    paddingBottom?: string;
    custom?: string;
};
export type OrderProps = {
    use: UseGafpriOrderReturn;
    useEntity: UseGafpriEntityReturn;
    usePagesMain: UseGafpriPagesSalesModuleReturn;
    sitesOptions: SiteOptions;
    containerStyles?: OrderStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    itemsMenu: HeaderMenuItem[];
    useProducts: UseGafpriProductsReturn;
    menuEntity: MainMenuItems[];
    uploadOrder: (event: KeyboardEvent<HTMLInputElement>) => void;
    uploadOrderOnlyProducts: (event: KeyboardEvent<HTMLInputElement>) => void;
};
export declare const Order: ({ use, useEntity, containerStyles, containerProps, itemsMenu, usePagesMain, sitesOptions, useProducts, menuEntity, uploadOrder, uploadOrderOnlyProducts, }: OrderProps) => JSX.Element;
