import type { ErrorResponseProps, CustomErrorResponseProps } from '../../../../helpers';
import type { UseErrorReturn } from '../../../../states';
import type { UseGafpriPagesPaymentTransferBankReturn } from './useGafpriPagesPaymentTransferBank';
import type { UseGafpriAttributesPaymentTransferBankReturn } from './useGafpriAttributesPaymentTransferBank';
export type UseGafpriApiPaymentTransferBankReturn = {
    actions: {
        newError: (newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps) => void;
        add: () => void;
    };
};
export type UseGafpriApiPaymentTransferBankProps = {
    usePages: UseGafpriPagesPaymentTransferBankReturn;
    useAttributes: UseGafpriAttributesPaymentTransferBankReturn;
    useError: UseErrorReturn;
    token: string | null;
};
export declare const useGafpriApiPaymentTransferBank: ({ usePages, useAttributes, useError, token, }: UseGafpriApiPaymentTransferBankProps) => UseGafpriApiPaymentTransferBankReturn;
