import { SiteOptions, UseCurrenciesReturn } from '../../states';
import { CashRegisterTypeCurrenciesAttributes } from '../states';
export type CashBalanceTableProps = {
    siteOptions: SiteOptions;
    currentBalance: CashRegisterTypeCurrenciesAttributes[];
    useCurrencies: UseCurrenciesReturn;
};
export declare const CashBalanceTable: ({ siteOptions, currentBalance, useCurrencies, }: CashBalanceTableProps) => JSX.Element;
