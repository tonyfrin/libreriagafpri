import type { SiteOptions, UseGafpriExpensesReturn } from '../../states';
export type ExpensesFormProps = {
    use: UseGafpriExpensesReturn;
    siteOptions: SiteOptions;
};
export declare const ExpensesForm: ({ use, siteOptions, }: ExpensesFormProps) => JSX.Element;
