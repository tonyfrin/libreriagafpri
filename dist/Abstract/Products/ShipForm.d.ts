import { UseGafpriProductsReturn } from '../../states';
export type ShipFormProps = {
    use: UseGafpriProductsReturn;
    formType: 'add' | 'update';
};
export type ShipFormExtended = {
    use?: UseGafpriProductsReturn;
    formType?: 'add' | 'update';
};
export declare const ShipForm: ({ use, formType }: ShipFormProps) => JSX.Element;
