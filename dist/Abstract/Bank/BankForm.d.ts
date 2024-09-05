import { UseGafpriBankTypeReturn, SiteOptions, UseCurrenciesReturn } from '../../states';
export type BankFormProps = {
    use: UseGafpriBankTypeReturn;
    siteOptions: SiteOptions;
    useCurrencies: UseCurrenciesReturn;
};
export declare const BankForm: ({ use, siteOptions, useCurrencies, }: BankFormProps) => JSX.Element;
