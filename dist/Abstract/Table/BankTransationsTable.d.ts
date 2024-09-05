import { CurrenciesAttributes, UseGafpriBankTypeReturn } from '../../states';
import { BankTransactionsAttributes } from '../states';
import { SiteOptions } from '../../states';
export type BankTransationsTableProps = {
    use: UseGafpriBankTypeReturn;
    siteOptions: SiteOptions;
    transactions: BankTransactionsAttributes[];
    title: string;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    bankCurrency: CurrenciesAttributes;
};
export declare const BankTransationsTable: ({ use, siteOptions, transactions, title, currentPage, setCurrentPage, bankCurrency, }: BankTransationsTableProps) => JSX.Element;
