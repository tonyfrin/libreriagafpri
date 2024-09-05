import { UseGafpriAttributesPaymentTransferCashRegisterReturn } from './useGafpriAttributesPaymentTransferCashRegister';
export type UseGafpriPagesPaymentTransferCashRegisterReturn = {
    states: {
        isFetching: boolean;
        isPaymentCrForm: boolean;
        isFinalPaymentCrForm: boolean;
    };
    actions: {
        onFetching: () => void;
        onPaymentCrForm: () => void;
        onFinalPaymentCrForm: () => void;
        returnInit: () => void;
    };
};
export type UseGafpriPagesPaymentTransferCashRegisterProps = {
    useAttributes: UseGafpriAttributesPaymentTransferCashRegisterReturn;
};
export declare const useGafpriPagesPaymentTransferCashRegister: ({ useAttributes, }: UseGafpriPagesPaymentTransferCashRegisterProps) => UseGafpriPagesPaymentTransferCashRegisterReturn;
