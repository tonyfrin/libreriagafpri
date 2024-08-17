import type { SiteOptions, UseCurrenciesReturn, UseErrorReturn } from '../../states';
import { UseGafpriAttributesPaymentTransferCashRegisterReturn } from '../states/payment';
export type CurrentPaymentInfo = {
    returnInit: () => void;
    next: () => void;
    buttonNextId: string;
    cashRegisterTypePostsId: number;
    cashRegisterPostsId: number;
};
export type TransferCashRegisterFormProps = {
    useError: UseErrorReturn;
    siteOptions: SiteOptions;
    useCurrencies: UseCurrenciesReturn;
    currentPaymentInfo: CurrentPaymentInfo;
    usePayment: UseGafpriAttributesPaymentTransferCashRegisterReturn;
};
export declare const TransferCashRegisterForm: ({ useError, siteOptions, useCurrencies, currentPaymentInfo, usePayment, }: TransferCashRegisterFormProps) => JSX.Element;
