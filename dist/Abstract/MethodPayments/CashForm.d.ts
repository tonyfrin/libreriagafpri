import type { SiteOptions, UseCurrenciesReturn, UseErrorReturn } from '../../states';
import { UseGafpriAttributesPaymentReturn } from '../states/payment';
export type CurrentPaymentInfo = {
    validationButtonNext: () => boolean;
    returnInit: () => void;
    next: () => void;
    buttonNextId: string;
    cashRegisterTypePostsId: number;
    cashRegisterPostsId: number;
    type: 'deposit' | 'debit';
    paymentType?: string;
};
export type CashFormProps = {
    useError: UseErrorReturn;
    siteOptions: SiteOptions;
    useCurrencies: UseCurrenciesReturn;
    currentPaymentInfo: CurrentPaymentInfo;
    usePayment: UseGafpriAttributesPaymentReturn;
};
export declare const CashForm: ({ useError, siteOptions, useCurrencies, currentPaymentInfo, usePayment, }: CashFormProps) => JSX.Element;
