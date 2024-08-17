import { ButtonProps } from '../Button';
import { HeaderProps } from '../Header';
import { ErrorProps } from '../Error';
import { ListPropsExtended } from '../List';
import type { UseGafpriProjectsReturn } from '../../states/useGafpriProjects';
export type InitProjectsProps = {
    use: UseGafpriProjectsReturn;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export type InitProjectsPropsExtended = {
    use?: UseGafpriProjectsReturn;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export declare const InitProjects: ({ use, optionsButtonMainContainerStyle, updateButtonProps, deleteButtonProps, headerProps, errorProps, listProps, }: InitProjectsProps) => JSX.Element;
