import type { UseGafpriCashRegisterTypeReturn, UseUserReturn } from '../../states';
export type CashRegisterTypeProps = {
    use: UseGafpriCashRegisterTypeReturn;
    useUser: UseUserReturn;
};
export declare const CashRegisterType: ({ use, useUser, }: CashRegisterTypeProps) => JSX.Element;
