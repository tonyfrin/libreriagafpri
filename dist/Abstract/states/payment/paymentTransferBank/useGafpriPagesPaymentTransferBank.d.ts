import { UseGafpriAttributesPaymentTransferBankReturn } from './useGafpriAttributesPaymentTransferBank';
export type UseGafpriPagesPaymentTransferBankReturn = {
    states: {
        isFetching: boolean;
        isPaymentForm: boolean;
        isFinalPaymentForm: boolean;
    };
    actions: {
        onFetching: () => void;
        onPaymentForm: () => void;
        onFinalPaymentForm: () => void;
        returnInit: () => void;
    };
};
export type UseGafpriPagesPaymentTransferBankProps = {
    useAttributes: UseGafpriAttributesPaymentTransferBankReturn;
};
export declare const useGafpriPagesPaymentTransferBank: ({ useAttributes, }: UseGafpriPagesPaymentTransferBankProps) => UseGafpriPagesPaymentTransferBankReturn;
