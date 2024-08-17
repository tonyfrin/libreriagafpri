import { ButtonProps } from '../Button';
import { ErrorProps } from '../Error';
import { HeaderProps } from '../Header';
import { ListPropsExtended } from '../List';
import type { UseGafpriProductsReturn, SiteOptions } from '../../states';
export type InitProductsProps = {
    use: UseGafpriProductsReturn;
    sitesOptions: SiteOptions;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export type InitProductsExtended = {
    use?: UseGafpriProductsReturn;
    sitesOptions?: SiteOptions;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export declare const InitProducts: ({ use, sitesOptions, optionsButtonMainContainerStyle, updateButtonProps, deleteButtonProps, headerProps, errorProps, listProps, }: InitProductsProps) => JSX.Element;
