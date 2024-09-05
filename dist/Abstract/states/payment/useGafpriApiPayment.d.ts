import type { UseErrorReturn, UseGafpriAccountsReceivableReturn, UseGafpriOrderReturn, UseGafpriOrderReturnReturn } from '../../../states';
import type { UseGafpriPagesPaymentReturn } from './useGafpriPagesPayment';
import type { UseGafpriAttributesPaymentReturn } from './useGafpriAttributesPayment';
export type UseGafpriApiPaymentReturn = {
    actions: {
        addOrderPayment: () => void;
        addCreditPayment: () => void;
        addOrderReturnPayment: () => void;
    };
};
export type UseGafpriApiPaymentProps = {
    useOrder: UseGafpriOrderReturn;
    usePages: UseGafpriPagesPaymentReturn;
    useCredit: UseGafpriAccountsReceivableReturn;
    useOrderReturn: UseGafpriOrderReturnReturn;
    useAttributes: UseGafpriAttributesPaymentReturn;
    useError: UseErrorReturn;
    token: string | null;
};
export declare const useGafpriApiPayment: ({ usePages, useOrder, useCredit, useAttributes, useOrderReturn, useError, token, }: UseGafpriApiPaymentProps) => UseGafpriApiPaymentReturn;
