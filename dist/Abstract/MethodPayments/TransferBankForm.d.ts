import type { UseGafpriBankTypeReturn, SiteOptions, UseCurrenciesReturn, UseErrorReturn } from '../../states';
import { UseGafpriAttributesPaymentTransferBankReturn } from '../states/payment';
export type CurrentPaymentInfo = {
    returnInit: () => void;
    next: () => void;
    buttonNextId: string;
    debitBankTypePostsId: number;
};
export type TransferBankFormProps = {
    useError: UseErrorReturn;
    siteOptions: SiteOptions;
    currentPaymentInfo: CurrentPaymentInfo;
    usePayment: UseGafpriAttributesPaymentTransferBankReturn;
    useBankType: UseGafpriBankTypeReturn;
    useCurrencies: UseCurrenciesReturn;
};
export declare const TransferBankForm: ({ useError, siteOptions, currentPaymentInfo, usePayment, useBankType, useCurrencies, }: TransferBankFormProps) => JSX.Element;
