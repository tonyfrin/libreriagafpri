import { UseGafpriEntityReturn, UseGafpriBudgetReturn } from '../../states';
import type { ButtonPropsExtended } from '../Button';
import type { ListProps } from '../List';
import type { ErrorProps } from '../Error';
export type EntityBudgetSearchProps = {
    use: UseGafpriEntityReturn;
    useBudget: UseGafpriBudgetReturn;
    optionButtonContainerStyle?: string;
    updateButtonProps?: ButtonPropsExtended;
    errorProps?: ErrorProps;
    listProps?: ListProps;
};
export type EntityBudgetSearchPropsExtended = {
    use: UseGafpriEntityReturn;
    optionButtonContainerStyle?: string;
    updateButtonProps?: ButtonPropsExtended;
    errorProps?: ErrorProps;
    listProps?: ListProps;
};
export declare const EntityBudgetSearch: ({ use, useBudget, optionButtonContainerStyle, updateButtonProps, errorProps, listProps, }: EntityBudgetSearchProps) => JSX.Element;
