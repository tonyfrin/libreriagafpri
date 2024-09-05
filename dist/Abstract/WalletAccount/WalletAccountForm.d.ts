import { UseGafpriWalletAccountReturn } from '../../states';
export type WalletAccountFormProps = {
    use: UseGafpriWalletAccountReturn;
    formType: 'add' | 'update';
};
export declare const WalletAccountForm: ({ use, formType, }: WalletAccountFormProps) => JSX.Element;
