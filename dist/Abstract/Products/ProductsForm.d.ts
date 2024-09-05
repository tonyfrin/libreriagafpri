import type { UseGafpriProductsReturn } from '../../states';
export type ProductsFormProps = {
    use: UseGafpriProductsReturn;
    formType: 'add' | 'update';
};
export type ProductsFormExtended = {
    use?: UseGafpriProductsReturn;
    formType?: 'add' | 'update';
};
export declare const ProductsForm: ({ use, formType, }: ProductsFormProps) => JSX.Element;
