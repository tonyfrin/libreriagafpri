import { UseGafpriProductsReturn } from '../../states';
export type CatalogFormProps = {
    use: UseGafpriProductsReturn;
    formType: 'add' | 'update';
};
export type CatalogFormExtended = {
    use?: UseGafpriProductsReturn;
    formType?: 'add' | 'update';
};
export declare const CatalogForm: ({ use, formType, }: CatalogFormProps) => JSX.Element;
