import { useGafpriError } from './useGafpriError';
import type { UseErrorReturn } from './useGafpriError';
import {
  UseGafpriAttributesPaymentTransferCashRegisterReturn,
  useGafpriAttributesPaymentTransferCashRegister,
  UseGafpriPagesPaymentTransferCashRegisterReturn,
  useGafpriPagesPaymentTransferCashRegister,
  UseGafpriApiPaymentTransferCashRegisterReturn,
  useGafpriApiPaymentTransferCashRegister,
} from '../Abstract';
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

export function useGafpriPaymentTransferCashRegister({
  token,
  useCurrencies,
  siteOptions,
  useCashRegisterType,
}: UseGafpriPaymentTransferCashRegisterProps): UseGafpriPaymentTransferCashRegisterReturn {
  /**
   * States
   *
   *
   */

  const error = useGafpriError();
  const attributes = useGafpriAttributesPaymentTransferCashRegister({
    currencies: useCurrencies,
    siteOptions,
    cashRegisterType: useCashRegisterType,
  });
  const pages = useGafpriPagesPaymentTransferCashRegister({
    useAttributes: attributes,
  });
  const api = useGafpriApiPaymentTransferCashRegister({
    token,
    useError: error,
    useAttributes: attributes,
    usePages: pages,
  });

  return {
    attributes,
    pages,
    api,
    error,
  };
}
