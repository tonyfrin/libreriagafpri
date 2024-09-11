import type { UseGafpriShippingAreasReturn, UseLoginReturn, UseRolesReturn } from '../../../states';
export type ShippingAreasProps = {
    use: UseGafpriShippingAreasReturn;
    useRoles: UseRolesReturn;
    useLogin: UseLoginReturn;
    keyApi: string;
};
export declare const ShippingAreas: ({ use, useLogin, useRoles, keyApi, }: ShippingAreasProps) => JSX.Element;
