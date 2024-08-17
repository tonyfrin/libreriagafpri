import { useGafpriError } from './useGafpriError';
import type { UseErrorReturn } from './useGafpriError';
import {
  UseGafpriAttributesPaymentTransferBankReturn,
  useGafpriAttributesPaymentTransferBank,
  UseGafpriPagesPaymentTransferBankReturn,
  useGafpriPagesPaymentTransferBank,
  UseGafpriApiPaymentTransferBankReturn,
  useGafpriApiPaymentTransferBank,
} from '../Abstract';
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

export function useGafpriPaymentTransferBank({
  token,
  siteOptions,
  useBankType,
}: UseGafpriPaymentTransferBankProps): UseGafpriPaymentTransferBankReturn {
  /**
   * States
   *
   *
   */

  const error = useGafpriError();
  const attributes = useGafpriAttributesPaymentTransferBank({
    siteOptions,
    bankType: useBankType,
  });
  const pages = useGafpriPagesPaymentTransferBank({
    useAttributes: attributes,
  });
  const api = useGafpriApiPaymentTransferBank({
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
