import { ButtonProps } from '../Button';
import { HeaderProps } from '../Header';
import { ErrorProps } from '../Error';
import { ListPropsExtended } from '../List';
import type { UseGafpriCashRegisterTypeReturn } from '../../states';
export type InitCashRegisterTypeProps = {
    use: UseGafpriCashRegisterTypeReturn;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export type InitCashRegisterTypePropsExtended = {
    use?: UseGafpriCashRegisterTypeReturn;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export declare const InitCashRegisterType: ({ use, optionsButtonMainContainerStyle, updateButtonProps, deleteButtonProps, headerProps, errorProps, listProps, }: InitCashRegisterTypeProps) => JSX.Element;
