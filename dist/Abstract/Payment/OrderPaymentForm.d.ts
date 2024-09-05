import { UseGafpriPaymentReturn, UseGafpriOrderReturn, SiteOptions } from '../../states';
export type OrderPaymentFormProps = {
    use: UseGafpriPaymentReturn;
    useOrder: UseGafpriOrderReturn;
    siteOptions: SiteOptions;
};
export declare const OrderPaymentForm: ({ use, useOrder, siteOptions, }: OrderPaymentFormProps) => JSX.Element;
