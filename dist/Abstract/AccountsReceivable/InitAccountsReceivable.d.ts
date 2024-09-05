import { ButtonProps } from '../Button';
import { HeaderProps } from '../Header';
import { ErrorProps } from '../Error';
import { ListPropsExtended } from '../List';
import type { UseGafpriAccountsReceivableReturn, SiteOptions } from '../../states';
export type InitAccountsReceivableProps = {
    use: UseGafpriAccountsReceivableReturn;
    siteOptions: SiteOptions;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export type InitAccountsReceivablePropsExtended = {
    use?: UseGafpriAccountsReceivableReturn;
    siteOptions?: SiteOptions;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export declare const InitAccountsReceivable: ({ use, siteOptions, optionsButtonMainContainerStyle, updateButtonProps, deleteButtonProps, headerProps, errorProps, listProps, }: InitAccountsReceivableProps) => JSX.Element;
