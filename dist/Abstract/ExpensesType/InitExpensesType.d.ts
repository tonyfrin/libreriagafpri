import type { ButtonProps } from '../Button';
import { ListPropsExtended } from '../List';
import type { ErrorProps } from '../Error';
import type { HeaderPropsExtended } from '../Header';
import type { UseGafpriExpensesTypeReturn } from 'src/states';
export type InitExpensesTypeProps = {
    use: UseGafpriExpensesTypeReturn;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderPropsExtended;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export type InitExpensesTypePropsExtended = {
    use: UseGafpriExpensesTypeReturn;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderPropsExtended;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export declare const InitExpensesType: ({ use, optionsButtonMainContainerStyle, updateButtonProps, deleteButtonProps, headerProps, errorProps, listProps, }: InitExpensesTypeProps) => JSX.Element;
