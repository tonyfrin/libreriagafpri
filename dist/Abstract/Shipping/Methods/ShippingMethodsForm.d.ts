import { ContainerButtonPropsExtended } from '../../Containers';
import { ModelFormPropsExtended } from '../../Form';
import { InputProps } from '../../Input';
import type { UseGafpriShippingMethodsReturn } from '../../../states';
export type ShippingMethodsFormProps = {
    use: UseGafpriShippingMethodsReturn;
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
export declare const ShippingMethodsForm: ({ use, formType, modelFormProps, infoContainerProps, nameInputProps, }: ShippingMethodsFormProps) => JSX.Element;
