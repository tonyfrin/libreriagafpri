import type { UseGafpriShippingAreasReturn, UseLoginReturn } from '../../../states';
export type ShippingAreasProps = {
    use: UseGafpriShippingAreasReturn;
    useLogin: UseLoginReturn;
    keyApi: string;
};
export declare const ShippingAreas: ({ use, useLogin, keyApi, }: ShippingAreasProps) => JSX.Element;
