import type { UseGafpriBankTypeReturn, UseCurrenciesReturn } from '../../states';
export type BankTypeProps = {
    use: UseGafpriBankTypeReturn;
    useCurrencies: UseCurrenciesReturn;
};
export declare const BankType: ({ use, useCurrencies, }: BankTypeProps) => JSX.Element;
