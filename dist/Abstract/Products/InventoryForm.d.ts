import { UseGafpriProductsReturn } from '../../states';
export type InventoryFormProps = {
    use: UseGafpriProductsReturn;
    formType: 'add' | 'update';
};
export type InventoryFormExtended = {
    use?: UseGafpriProductsReturn;
    formType?: 'add' | 'update';
};
export declare const InventoryForm: ({ use, formType, }: InventoryFormProps) => JSX.Element;
