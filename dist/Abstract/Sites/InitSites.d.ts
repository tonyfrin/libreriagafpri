import type { ButtonProps } from '../Button';
import type { ListPropsExtended } from '../List';
import type { ErrorProps } from '../Error';
import type { HeaderProps } from '../Header';
import type { UseGafpriSitesReturn } from '../../states';
export type InitSitesProps = {
    use: UseGafpriSitesReturn;
    optionButtonContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export type InitSitesPropsExtended = {
    use?: UseGafpriSitesReturn;
    optionButtonContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export declare const InitSites: ({ use, optionButtonContainerStyle, updateButtonProps, deleteButtonProps, headerProps, errorProps, listProps, }: InitSitesProps) => JSX.Element;
