import { UseGafpriCashRegisterTypeReturn } from '../../states';
import { CashTransactionsAttributes } from '../states';
import { SiteOptions } from '../../states';
export type CashTransationsTableProps = {
    use: UseGafpriCashRegisterTypeReturn;
    siteOptions: SiteOptions;
    cashTransactions: CashTransactionsAttributes[];
    title: string;
    currentPage: number;
    setCurrentPage: (page: number) => void;
};
export declare const CashTransationsTable: ({ use, siteOptions, cashTransactions, title, currentPage, setCurrentPage, }: CashTransationsTableProps) => JSX.Element;
