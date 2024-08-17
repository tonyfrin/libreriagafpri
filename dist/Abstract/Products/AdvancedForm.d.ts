import { UseGafpriProductsReturn } from '../../states';
export type AdvancedFormProps = {
    use: UseGafpriProductsReturn;
    formType: 'add' | 'update';
};
export type AdvancedFormExtended = {
    use?: UseGafpriProductsReturn;
    formType?: 'add' | 'update';
};
export declare const AdvancedForm: ({ use, formType, }: AdvancedFormProps) => JSX.Element;
