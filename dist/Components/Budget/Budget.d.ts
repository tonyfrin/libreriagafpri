import React, { KeyboardEvent } from 'react';
import { UseGafpriProductsReturn, UseGafpriBudgetReturn, UseGafpriEntityReturn, SiteOptions } from '../../states';
import { HeaderMenuItem, MainMenuItems, UseGafpriPagesSalesModuleReturn } from '../../Abstract';
export type BudgetStylesContainerProps = {
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundRepeat?: string;
    height?: string;
    custom?: string;
};
export type BudgetProps = {
    use: UseGafpriBudgetReturn;
    useEntity: UseGafpriEntityReturn;
    usePagesMain: UseGafpriPagesSalesModuleReturn;
    sitesOptions: SiteOptions;
    logoPdf: string;
    menu: MainMenuItems[];
    containerStyles?: BudgetStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    itemsMenu: HeaderMenuItem[];
    useProducts: UseGafpriProductsReturn;
    menuEntity: MainMenuItems[];
    uploadBudget: (event: KeyboardEvent<HTMLInputElement>) => void;
    uploadBudgetOnlyProducts: (event: KeyboardEvent<HTMLInputElement>) => void;
};
export declare const Budget: ({ use, useEntity, containerStyles, containerProps, itemsMenu, logoPdf, usePagesMain, sitesOptions, menu, useProducts, menuEntity, uploadBudget, uploadBudgetOnlyProducts, }: BudgetProps) => JSX.Element;
