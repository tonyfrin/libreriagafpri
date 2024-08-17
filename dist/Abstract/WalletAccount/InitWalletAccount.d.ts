import { ButtonProps } from '../Button';
import { HeaderProps } from '../Header';
import { ErrorProps } from '../Error';
import { ListPropsExtended } from '../List';
import type { UseGafpriWalletAccountReturn } from '../../states';
export type InitWalletAccountProps = {
    use: UseGafpriWalletAccountReturn;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export type InitWalletAccountPropsExtended = {
    use?: UseGafpriWalletAccountReturn;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export declare const InitWalletAccount: ({ use, optionsButtonMainContainerStyle, updateButtonProps, deleteButtonProps, headerProps, errorProps, listProps, }: InitWalletAccountProps) => JSX.Element;
