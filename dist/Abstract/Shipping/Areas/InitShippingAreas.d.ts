import { ButtonProps } from '../../Button';
import { HeaderProps } from '../../Header';
import { ErrorProps } from '../../Error';
import { ListPropsExtended } from '../../List';
import type { UseGafpriShippingAreasReturn } from '../../../states';
export type InitShippingAreasProps = {
    use: UseGafpriShippingAreasReturn;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export type InitShippingAreasExtended = {
    use?: UseGafpriShippingAreasReturn;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export declare const InitShippingAreas: ({ use, optionsButtonMainContainerStyle, updateButtonProps, deleteButtonProps, headerProps, errorProps, listProps, }: InitShippingAreasProps) => JSX.Element;
