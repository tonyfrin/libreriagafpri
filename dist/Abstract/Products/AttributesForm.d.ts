import { UseGafpriProductsReturn } from '../../states';
export type AttributesFormProps = {
    use: UseGafpriProductsReturn;
    formType: 'add' | 'update';
};
export type AttributesFormExtended = {
    use?: UseGafpriProductsReturn;
    formType?: 'add' | 'update';
};
export declare const AttributesForm: ({ use, formType, }: AttributesFormProps) => JSX.Element;
