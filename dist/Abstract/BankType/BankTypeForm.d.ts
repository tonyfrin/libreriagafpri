import { UseCurrenciesReturn, UseGafpriBankTypeReturn } from '../../states';
export type BankTypeFormProps = {
    use: UseGafpriBankTypeReturn;
    formType: 'add' | 'update';
    useCurrencies: UseCurrenciesReturn;
};
export declare const BankTypeForm: ({ use, formType, useCurrencies, }: BankTypeFormProps) => JSX.Element;
