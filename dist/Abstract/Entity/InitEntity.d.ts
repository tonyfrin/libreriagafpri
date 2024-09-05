import type { ButtonPropsExtended } from '../Button';
import type { ListProps } from '../List';
import type { ErrorProps } from '../Error';
import { HeaderPropsExtended } from '../Header';
import type { UseGafpriEntityReturn } from '../../states';
export type InitEntityProps = {
    use: UseGafpriEntityReturn;
    optionButtonContainerStyle?: string;
    updateButtonProps?: ButtonPropsExtended;
    viewButtonProps?: ButtonPropsExtended;
    headerProps?: HeaderPropsExtended;
    errorProps?: ErrorProps;
    listProps?: ListProps;
};
export type InitEntityPropsExtended = {
    use: UseGafpriEntityReturn;
    optionButtonContainerStyle?: string;
    updateButtonProps?: ButtonPropsExtended;
    viewButtonProps?: ButtonPropsExtended;
    headerProps?: HeaderPropsExtended;
    errorProps?: ErrorProps;
    listProps?: ListProps;
};
export declare const InitEntity: ({ use, optionButtonContainerStyle, updateButtonProps, viewButtonProps, headerProps, errorProps, listProps, }: InitEntityProps) => JSX.Element;
