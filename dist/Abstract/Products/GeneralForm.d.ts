import { UseGafpriProductsReturn } from '../../states';
export type GeneralFormProps = {
    use: UseGafpriProductsReturn;
    formType: 'add' | 'update';
};
export type GeneralFormExtended = {
    use?: UseGafpriProductsReturn;
    formType?: 'add' | 'update';
};
export declare const GeneralForm: ({ use, formType, }: GeneralFormProps) => JSX.Element;
