import { UseGafpriProductsReturn } from '../../states';
export type PriceFormProps = {
    use: UseGafpriProductsReturn;
    formType: 'add' | 'update';
};
export type PriceFormExtended = {
    use?: UseGafpriProductsReturn;
    formType?: 'add' | 'update';
};
export declare const PriceForm: ({ use, formType }: PriceFormProps) => JSX.Element;
