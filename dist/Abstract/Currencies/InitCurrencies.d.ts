import type { ButtonProps } from '../Button';
import { ListPropsExtended } from '../List';
import type { ErrorProps } from '../Error';
import type { HeaderProps } from '../Header';
import type { UseCurrenciesReturn } from 'src/states';
export type InitCurrenciesProps = {
    use: UseCurrenciesReturn;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export type InitCurrenciesPropsExtended = {
    use?: UseCurrenciesReturn;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export declare const InitCurrencies: ({ use, optionsButtonMainContainerStyle, updateButtonProps, deleteButtonProps, headerProps, errorProps, listProps, }: InitCurrenciesProps) => JSX.Element;
