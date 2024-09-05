import type { UseErrorReturn } from './useGafpriError';
import { UseGafpriAttributesPaymentTransferBankReturn, UseGafpriPagesPaymentTransferBankReturn, UseGafpriApiPaymentTransferBankReturn } from '../Abstract';
import { SiteOptions } from './sitesOptions';
import { UseGafpriBankTypeReturn } from './useGafpriBankType';
export interface UseGafpriPaymentTransferBankReturn {
    attributes: UseGafpriAttributesPaymentTransferBankReturn;
    pages: UseGafpriPagesPaymentTransferBankReturn;
    api: UseGafpriApiPaymentTransferBankReturn;
    error: UseErrorReturn;
}
export type UseGafpriPaymentTransferBankProps = {
    token: string | null;
    siteOptions: SiteOptions;
    useBankType: UseGafpriBankTypeReturn;
};
export declare function useGafpriPaymentTransferBank({ token, siteOptions, useBankType, }: UseGafpriPaymentTransferBankProps): UseGafpriPaymentTransferBankReturn;
