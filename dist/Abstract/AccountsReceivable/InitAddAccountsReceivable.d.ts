import React from 'react';
import { UseGafpriAccountsReceivableReturn, UseGafpriEntityReturn } from '../../states';
export type InitAddAccountsReceivableStylesContainerProps = {
    maxWidht?: string;
    margin?: string;
    custom?: string;
};
export type InitAddAccountsReceivableProps = {
    containerStyles?: InitAddAccountsReceivableStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    use: UseGafpriAccountsReceivableReturn;
    useEntity: UseGafpriEntityReturn;
};
export declare const InitAddAccountsReceivable: ({ containerStyles, containerProps, use, useEntity, }: InitAddAccountsReceivableProps) => JSX.Element;
