import { UseGafpriCashRegisterTypeReturn, UseLoginReturn } from '../../states';
export type InitCashRegisterProps = {
    use: UseGafpriCashRegisterTypeReturn;
    uselogin: UseLoginReturn;
    returnModule: () => void;
};
export declare const InitCashRegister: ({ use, uselogin, returnModule, }: InitCashRegisterProps) => JSX.Element;
