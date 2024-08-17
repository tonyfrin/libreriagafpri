import { SiteOptions } from '../../states';
import { CashRegisterTypeCurrenciesAttributes, CashRegisterCurrenciesAttributes, CashTransactionsAttributes } from '../states';
export type ConciliateTableProps = {
    expenses: CashTransactionsAttributes[];
    income: CashTransactionsAttributes[];
    siteOptions: SiteOptions;
    currentBalance: CashRegisterTypeCurrenciesAttributes[];
    initBalance: CashRegisterCurrenciesAttributes[];
    conciliate: () => void;
};
export declare const ConciliateTable: ({ expenses, income, siteOptions, currentBalance, initBalance, conciliate, }: ConciliateTableProps) => JSX.Element;
