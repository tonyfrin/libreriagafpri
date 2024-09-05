import { ButtonProps } from '../Button';
import { HeaderProps } from '../Header';
import { ErrorProps } from '../Error';
import { ListPropsExtended } from '../List';
import type { UseGafpriBankTypeReturn } from '../../states';
export type InitBankTypeProps = {
    use: UseGafpriBankTypeReturn;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export type InitBankTypePropsExtended = {
    use?: UseGafpriBankTypeReturn;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export declare const InitBankType: ({ use, optionsButtonMainContainerStyle, updateButtonProps, deleteButtonProps, headerProps, errorProps, listProps, }: InitBankTypeProps) => JSX.Element;
