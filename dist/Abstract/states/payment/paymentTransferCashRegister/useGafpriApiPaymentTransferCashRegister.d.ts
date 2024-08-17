import type { ErrorResponseProps, CustomErrorResponseProps } from '../../../../helpers';
import type { UseErrorReturn } from '../../../../states';
import type { UseGafpriPagesPaymentTransferCashRegisterReturn } from './useGafpriPagesPaymentTransferCashRegister';
import type { UseGafpriAttributesPaymentTransferCashRegisterReturn } from './useGafpriAttributesPaymentTransferCashRegister';
export type UseGafpriApiPaymentTransferCashRegisterReturn = {
    actions: {
        newError: (newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps) => void;
        add: () => void;
    };
};
export type UseGafpriApiPaymentTransferCashRegisterProps = {
    usePages: UseGafpriPagesPaymentTransferCashRegisterReturn;
    useAttributes: UseGafpriAttributesPaymentTransferCashRegisterReturn;
    useError: UseErrorReturn;
    token: string | null;
};
export declare const useGafpriApiPaymentTransferCashRegister: ({ usePages, useAttributes, useError, token, }: UseGafpriApiPaymentTransferCashRegisterProps) => UseGafpriApiPaymentTransferCashRegisterReturn;
