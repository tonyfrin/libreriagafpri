import { SingleValue } from 'react-select';
import { UseGafpriAttributesPaymentReturn } from '..';
import { SelectDefault } from '../../../../helpers';
import { SiteOptions, UseGafpriBankTypeReturn } from '../../../../states';
type State = {
    depositBankTypePostsId: string;
    depositBankTypePostsIdValid: boolean;
    depositBankTypePostsIdDefault: SelectDefault;
    depositBankTypePostsIdOptions: SelectDefault[];
    debitBankTypePostsId: number;
};
type Actions = {
    infoReset: () => void;
    validationDepositBankTypePostsId: (value: string) => boolean;
    changeDepositBankTypeId: (value: SingleValue<{
        label: string;
        value: string;
    }>) => void;
    validationButtonNextPayment: () => void;
    validationButtonNextAdd: () => void;
    setDebitBankTypePostsId: (value: number) => void;
};
export type UseGafpriAttributesPaymentTransferBankReturn = {
    states: State;
    actions: Actions;
    usePayment: UseGafpriAttributesPaymentReturn;
};
export type UseGafpriAttributesPaymentTransferBankProps = {
    bankType: UseGafpriBankTypeReturn;
    siteOptions: SiteOptions;
};
export declare function useGafpriAttributesPaymentTransferBank({ bankType, siteOptions, }: UseGafpriAttributesPaymentTransferBankProps): UseGafpriAttributesPaymentTransferBankReturn;
export {};
