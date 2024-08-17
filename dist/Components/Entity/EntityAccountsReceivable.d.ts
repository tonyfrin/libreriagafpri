import React from 'react';
import { MainMenuItems } from '../../Abstract';
import { UseGafpriAccountsReceivableReturn, UseGafpriEntityReturn } from '../../states';
export type EntityAccountsReceivableStylesContainerProps = {
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundRepeat?: string;
    height?: string;
    custom?: string;
};
export type EntityAccountsReceivableProps = {
    use: UseGafpriEntityReturn;
    useAccountsReceivable: UseGafpriAccountsReceivableReturn;
    containerStyles?: EntityAccountsReceivableStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    menu: MainMenuItems[];
};
export declare const EntityAccountsReceivable: ({ use, useAccountsReceivable, containerStyles, containerProps, menu, }: EntityAccountsReceivableProps) => JSX.Element;
