import { UseGafpriEntityReturn, UseGafpriExpensesReturn } from '../../states';
import type { ButtonPropsExtended } from '../Button';
import type { ListProps } from '../List';
import type { ErrorProps } from '../Error';
export type EntityExpensesSearchProps = {
    use: UseGafpriEntityReturn;
    useExpenses: UseGafpriExpensesReturn;
    optionButtonContainerStyle?: string;
    updateButtonProps?: ButtonPropsExtended;
    errorProps?: ErrorProps;
    listProps?: ListProps;
};
export type EntityExpensesSearchPropsExtended = {
    use: UseGafpriEntityReturn;
    optionButtonContainerStyle?: string;
    updateButtonProps?: ButtonPropsExtended;
    errorProps?: ErrorProps;
    listProps?: ListProps;
};
export declare const EntityExpensesSearch: ({ use, useExpenses, optionButtonContainerStyle, updateButtonProps, errorProps, listProps, }: EntityExpensesSearchProps) => JSX.Element;
