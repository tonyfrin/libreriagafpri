import { UseGafpriPaymentReturn, SiteOptions, UseGafpriAccountsReceivableReturn, UseGafpriOrderReturn } from '../../states';
export type CreditStepProps = {
    use: UseGafpriPaymentReturn;
    useCredits: UseGafpriAccountsReceivableReturn;
    useOrder: UseGafpriOrderReturn;
    siteOptions: SiteOptions;
};
export declare const CreditStep: ({ use, useCredits, useOrder, siteOptions, }: CreditStepProps) => JSX.Element;
