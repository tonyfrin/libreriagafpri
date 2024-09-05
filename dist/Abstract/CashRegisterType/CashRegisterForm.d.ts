import { UseGafpriCashRegisterTypeReturn, SiteOptions, UseLoginReturn, UseGafpriExpensesReturn, UseCurrenciesReturn, UseGafpriEntityReturn, UseGafpriPaymentTransferCashRegisterReturn, UseGafpriIncomeReturn } from '../../states';
import { MainMenuItems } from '../Menu';
export type CashRegisterFormProps = {
    use: UseGafpriCashRegisterTypeReturn;
    siteOptions: SiteOptions;
    useExpenses: UseGafpriExpensesReturn;
    useCurrencies: UseCurrenciesReturn;
    useEntity: UseGafpriEntityReturn;
    entityMenu: MainMenuItems[];
    usePaymentTransferCashRegister: UseGafpriPaymentTransferCashRegisterReturn;
    useIncome: UseGafpriIncomeReturn;
    useLogin: UseLoginReturn;
};
export declare const CashRegisterForm: ({ use, siteOptions, useExpenses, useCurrencies, useEntity, entityMenu, usePaymentTransferCashRegister, useIncome, useLogin, }: CashRegisterFormProps) => JSX.Element;
