import type { SiteOptions, UseCurrenciesReturn, UseErrorReturn } from '../../states';
import { UseGafpriAttributesPaymentReturn } from '../states/payment';
type CurrentPaymentInfo = {
    difference: number;
    amount: number;
    add: () => void;
    validationButtonNext: () => boolean;
    infoReset: () => void;
    returnInit: () => void;
    buttonNextId: string;
    paymentType: string;
};
export type SingleFormProps = {
    useError: UseErrorReturn;
    siteOptions: SiteOptions;
    currentPaymentInfo: CurrentPaymentInfo;
    usePayment: UseGafpriAttributesPaymentReturn;
    useCurrencies: UseCurrenciesReturn;
};
export declare const SingleForm: ({ useError, siteOptions, currentPaymentInfo, usePayment, useCurrencies, }: SingleFormProps) => JSX.Element;
export {};
