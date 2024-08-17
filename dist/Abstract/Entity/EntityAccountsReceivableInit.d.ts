import React from 'react';
import { MainMenuItems } from '../Menu';
import { UseGafpriEntityReturn, UseGafpriAccountsReceivableReturn } from '../../states';
export type EntityAccountsReceivableInitStylesContainerProps = {
    maxWidht?: string;
    margin?: string;
    custom?: string;
};
export type EntityAccountsReceivableInitProps = {
    containerStyles?: EntityAccountsReceivableInitStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    useEntity: UseGafpriEntityReturn;
    useAccountsReceivable: UseGafpriAccountsReceivableReturn;
    menu: MainMenuItems[];
};
export declare const EntityAccountsReceivableInit: ({ containerStyles, containerProps, useEntity, useAccountsReceivable, menu, }: EntityAccountsReceivableInitProps) => JSX.Element;
