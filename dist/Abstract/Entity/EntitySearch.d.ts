import { UseGafpriEntityReturn, UseGafpriOrderReturn } from '../../states';
import type { ButtonPropsExtended } from '../Button';
import type { ListProps } from '../List';
import type { ErrorProps } from '../Error';
export type EntitySearchProps = {
    use: UseGafpriEntityReturn;
    useOrder: UseGafpriOrderReturn;
    optionButtonContainerStyle?: string;
    updateButtonProps?: ButtonPropsExtended;
    errorProps?: ErrorProps;
    listProps?: ListProps;
};
export type EntitySearchPropsExtended = {
    use: UseGafpriEntityReturn;
    optionButtonContainerStyle?: string;
    updateButtonProps?: ButtonPropsExtended;
    errorProps?: ErrorProps;
    listProps?: ListProps;
};
export declare const EntitySearch: ({ use, useOrder, optionButtonContainerStyle, updateButtonProps, errorProps, listProps, }: EntitySearchProps) => JSX.Element;
