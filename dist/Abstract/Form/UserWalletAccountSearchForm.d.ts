import React from 'react';
import type { UseGafpriWalletAccountReturn, UseUserReturn } from '../../states';
export type UserWalletAccountSearchFormStaylesContainerProps = {
    color?: string;
    fontSize?: string;
    paddingBottom?: string;
    custom?: string;
};
export type UserWalletAccountSearchFormProps = {
    containerStyles?: UserWalletAccountSearchFormStaylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    use: UseGafpriWalletAccountReturn;
    useUser: UseUserReturn;
    returnModule: () => void;
};
export declare const UserWalletAccountSearchForm: ({ containerStyles, containerProps, useUser, use, returnModule, }: UserWalletAccountSearchFormProps) => React.JSX.Element;
