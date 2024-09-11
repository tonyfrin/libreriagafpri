import { ContainerButtonPropsExtended } from '../../Containers';
import { ModelFormPropsExtended } from '../../Form';
import { InputProps } from '../../Input';
import type { UseGafpriShippingMethodsReturn, UseRolesReturn } from '../../../states';
export type ShippingMethodsFormProps = {
    use: UseGafpriShippingMethodsReturn;
    useRoles: UseRolesReturn;
    formType: 'add' | 'update';
    modelFormProps?: ModelFormPropsExtended;
    infoContainerProps?: ContainerButtonPropsExtended;
    nameInputProps?: InputProps;
    descriptionInputProps?: InputProps;
};
export type ShippingMethodsFormPropsExtended = {
    use?: UseGafpriShippingMethodsReturn;
    formType?: 'add' | 'update';
    modelFormProps?: ModelFormPropsExtended;
    infoContainerProps?: ContainerButtonPropsExtended;
    nameInputProps?: InputProps;
    descriptionInputProps?: InputProps;
};
export declare const ShippingMethodsForm: ({ use, useRoles, formType, modelFormProps, infoContainerProps, nameInputProps, }: ShippingMethodsFormProps) => JSX.Element;
