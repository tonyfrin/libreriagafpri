import { UseGafpriTaxClassesReturn } from '../../../states';
import { ButtonProps } from '../../Button';
import { ErrorProps } from '../../Error';
import { HeaderProps } from '../../Header';
import { ListPropsExtended } from '../../List';
export type InitTaxClassesProps = {
    use: UseGafpriTaxClassesReturn;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export type InitTaxClassesExtended = {
    use?: UseGafpriTaxClassesReturn;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export declare const InitTaxClasses: ({ use, optionsButtonMainContainerStyle, updateButtonProps, deleteButtonProps, headerProps, errorProps, listProps, }: InitTaxClassesProps) => JSX.Element;
