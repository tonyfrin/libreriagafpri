import type { ButtonProps } from '../Button';
import type { ListPropsExtended } from '../List';
import type { ErrorProps } from '../Error';
import type { HeaderProps } from '../Header';
import { UseRolesReturn } from '../../states';
export type InitRolesProps = {
    use: UseRolesReturn;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export type InitRolesPropsExtended = {
    use?: UseRolesReturn;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export declare const InitRoles: ({ use, optionsButtonMainContainerStyle, updateButtonProps, deleteButtonProps, headerProps, errorProps, listProps, }: InitRolesProps) => JSX.Element;
