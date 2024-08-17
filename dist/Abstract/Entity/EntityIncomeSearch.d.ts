import { UseGafpriEntityReturn, UseGafpriIncomeReturn } from '../../states';
import type { ButtonPropsExtended } from '../Button';
import type { ListProps } from '../List';
import type { ErrorProps } from '../Error';
export type EntityIncomeSearchProps = {
    use: UseGafpriEntityReturn;
    useIncome: UseGafpriIncomeReturn;
    optionButtonContainerStyle?: string;
    updateButtonProps?: ButtonPropsExtended;
    errorProps?: ErrorProps;
    listProps?: ListProps;
};
export type EntityIncomeSearchPropsExtended = {
    use: UseGafpriEntityReturn;
    optionButtonContainerStyle?: string;
    updateButtonProps?: ButtonPropsExtended;
    errorProps?: ErrorProps;
    listProps?: ListProps;
};
export declare const EntityIncomeSearch: ({ use, useIncome, optionButtonContainerStyle, updateButtonProps, errorProps, listProps, }: EntityIncomeSearchProps) => JSX.Element;
