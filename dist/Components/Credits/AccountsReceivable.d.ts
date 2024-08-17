import React from 'react';
import { UseGafpriAccountsReceivableReturn, UseGafpriEntityReturn, SiteOptions } from '../../states';
import { MainMenuItems } from '../../Abstract';
export type AccountsReceivableStylesContainerProps = {
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundRepeat?: string;
    minHeight?: string;
    paddingTop?: string;
    paddingBottom?: string;
    custom?: string;
};
export type AccountsReceivableProps = {
    use: UseGafpriAccountsReceivableReturn;
    useEntity: UseGafpriEntityReturn;
    sitesOptions: SiteOptions;
    containerStyles?: AccountsReceivableStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    menuEntity: MainMenuItems[];
};
export declare const AccountsReceivable: ({ use, useEntity, containerStyles, containerProps, sitesOptions, menuEntity, }: AccountsReceivableProps) => JSX.Element;
