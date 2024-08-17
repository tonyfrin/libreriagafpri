import { UseGafpriPaymentReturn, SiteOptions, UseGafpriAccountsReceivableReturn } from '../../states';
export type CreditPaymentFormProps = {
    use: UseGafpriPaymentReturn;
    useCredit: UseGafpriAccountsReceivableReturn;
    siteOptions: SiteOptions;
};
export declare const CreditPaymentForm: ({ use, useCredit, siteOptions, }: CreditPaymentFormProps) => JSX.Element;
