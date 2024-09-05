import { ContainerButtonPropsExtended } from '../../Containers';
import { ModelFormPropsExtended } from '../../Form';
import { InputProps } from '../../Input';
import type { UseGafpriTaxClassesReturn } from '../../../states';
export type TaxClassesFormProps = {
    use: UseGafpriTaxClassesReturn;
    formType: 'add' | 'update';
    modelFormProps?: ModelFormPropsExtended;
    infoContainerProps?: ContainerButtonPropsExtended;
    nameInputProps?: InputProps;
    descriptionInputProps?: InputProps;
};
export type TaxClassesFormPropsExtended = {
    use?: UseGafpriTaxClassesReturn;
    formType?: 'add' | 'update';
    modelFormProps?: ModelFormPropsExtended;
    infoContainerProps?: ContainerButtonPropsExtended;
    nameInputProps?: InputProps;
    descriptionInputProps?: InputProps;
};
export declare const TaxClassesForm: ({ use, formType, modelFormProps, infoContainerProps, nameInputProps, }: TaxClassesFormProps) => JSX.Element;
