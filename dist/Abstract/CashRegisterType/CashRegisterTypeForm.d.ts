import { UseGafpriCashRegisterTypeReturn } from '../../states';
import { UseUserReturn } from '../../states';
export type CashRegisterTypeFormProps = {
    use: UseGafpriCashRegisterTypeReturn;
    formType: 'add' | 'update';
    useUser: UseUserReturn;
};
export declare const CashRegisterTypeForm: ({ use, formType, useUser, }: CashRegisterTypeFormProps) => JSX.Element;
