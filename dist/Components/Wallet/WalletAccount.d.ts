import type { UseGafpriWalletAccountReturn, UseUserReturn } from '../../states';
export type WalletAccountProps = {
    use: UseGafpriWalletAccountReturn;
    useUser: UseUserReturn;
};
export declare const WalletAccount: ({ use, useUser, }: WalletAccountProps) => JSX.Element;
