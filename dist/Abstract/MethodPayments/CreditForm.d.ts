import type { SiteOptions, UseCurrenciesReturn, UseErrorReturn, UseGafpriOrderReturn } from '../../states';
import { UseGafpriAttributesPaymentReturn } from '../states/payment';
type CurrentPaymentInfo = {
    orderPostsId: number;
    difference: number;
    amount: number;
    add: () => void;
    validationButtonNext: () => boolean;
    infoReset: () => void;
    returnInit: () => void;
    buttonNextId: string;
};
export type CreditFormProps = {
    useError: UseErrorReturn;
    useOrder: UseGafpriOrderReturn;
    siteOptions: SiteOptions;
    currentPaymentInfo: CurrentPaymentInfo;
    usePayment: UseGafpriAttributesPaymentReturn;
    useCurrencies: UseCurrenciesReturn;
};
export declare const CreditForm: ({ useError, siteOptions, useOrder, currentPaymentInfo, usePayment, useCurrencies, }: CreditFormProps) => JSX.Element;
export {};
