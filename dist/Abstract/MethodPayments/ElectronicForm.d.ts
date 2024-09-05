import React from 'react';
import { SingleValue } from 'react-select';
import type { UseGafpriBankTypeReturn, SiteOptions, UseCurrenciesReturn, UseErrorReturn } from '../../states';
import { UseGafpriAttributesPaymentReturn } from '../states/payment';
type CurrentPaymentInfo = {
    paymentType: string;
    changeNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeBankTypePostsId: (e: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    bankTypePostsId: number;
    changeNote: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeNameSend: (e: React.ChangeEvent<HTMLInputElement>) => void;
    add: () => void;
    infoReset: () => void;
    returnInit: () => void;
    buttonNextId: string;
};
export type ElectronicFormProps = {
    useError: UseErrorReturn;
    siteOptions: SiteOptions;
    currentPaymentInfo: CurrentPaymentInfo;
    usePayment: UseGafpriAttributesPaymentReturn;
    useBankType: UseGafpriBankTypeReturn;
    useCurrencies: UseCurrenciesReturn;
};
export declare const ElectronicForm: ({ useError, siteOptions, currentPaymentInfo, usePayment, useBankType, useCurrencies, }: ElectronicFormProps) => JSX.Element;
export {};
