import React from 'react';
import { UseGafpriPaymentTransferBankReturn, SiteOptions, UseCurrenciesReturn, UseGafpriBankTypeReturn } from '../../states';
export type PaymentTransferBankProps = {
    use: UseGafpriPaymentTransferBankReturn;
    useCurrencies: UseCurrenciesReturn;
    useBankType: UseGafpriBankTypeReturn;
    sitesOptions: SiteOptions;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    returnInitModule: () => void;
};
export declare const PaymentTransferBank: ({ use, useCurrencies, useBankType, containerProps, sitesOptions, returnInitModule, }: PaymentTransferBankProps) => JSX.Element;
