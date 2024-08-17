import { UseGafpriPaymentReturn, UseGafpriOrderReturnReturn, SiteOptions } from '../../states';
export type OrderReturnPaymentFormProps = {
    use: UseGafpriPaymentReturn;
    useOrderReturn: UseGafpriOrderReturnReturn;
    siteOptions: SiteOptions;
};
export declare const OrderReturnPaymentForm: ({ use, useOrderReturn, siteOptions, }: OrderReturnPaymentFormProps) => JSX.Element;
