import { ContainerButtonPropsExtended } from '../../Containers';
import { ModelFormPropsExtended } from '../../Form';
import { InputProps } from '../../Input';
import type { UseGafpriShippingAreasReturn } from '../../../states';
export type ShippingAreasFormProps = {
    use: UseGafpriShippingAreasReturn;
    formType: 'add' | 'update';
    modelFormProps?: ModelFormPropsExtended;
    infoContainerProps?: ContainerButtonPropsExtended;
    nameInputProps?: InputProps;
    keyApi: string;
};
export type ShippingAreasFormPropsExtended = {
    use?: UseGafpriShippingAreasReturn;
    formType?: 'add' | 'update';
    modelFormProps?: ModelFormPropsExtended;
    infoContainerProps?: ContainerButtonPropsExtended;
    nameInputProps?: InputProps;
};
export declare const ShippingAreasForm: ({ use, formType, modelFormProps, infoContainerProps, nameInputProps, keyApi, }: ShippingAreasFormProps) => JSX.Element;
