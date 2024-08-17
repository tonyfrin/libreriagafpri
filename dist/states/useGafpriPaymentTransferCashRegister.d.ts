import type { UseErrorReturn } from './useGafpriError';
import { UseGafpriAttributesPaymentTransferCashRegisterReturn, UseGafpriPagesPaymentTransferCashRegisterReturn, UseGafpriApiPaymentTransferCashRegisterReturn } from '../Abstract';
import { UseCurrenciesReturn } from './useGafpriCurrencies';
import { SiteOptions } from './sitesOptions';
import { UseGafpriCashRegisterTypeReturn } from './useGafpriCashRegisterType';
export interface UseGafpriPaymentTransferCashRegisterReturn {
    attributes: UseGafpriAttributesPaymentTransferCashRegisterReturn;
    pages: UseGafpriPagesPaymentTransferCashRegisterReturn;
    api: UseGafpriApiPaymentTransferCashRegisterReturn;
    error: UseErrorReturn;
}
export type UseGafpriPaymentTransferCashRegisterProps = {
    token: string | null;
    useCurrencies: UseCurrenciesReturn;
    siteOptions: SiteOptions;
    useCashRegisterType: UseGafpriCashRegisterTypeReturn;
};
export declare function useGafpriPaymentTransferCashRegister({ token, useCurrencies, siteOptions, useCashRegisterType, }: UseGafpriPaymentTransferCashRegisterProps): UseGafpriPaymentTransferCashRegisterReturn;
