import { useGafpriError } from './useGafpriError';
import type { UseErrorReturn } from './useGafpriError';
import { UseGafpriSitesReturn } from './useGafpriSites';
import { UseCurrenciesReturn } from './useGafpriCurrencies';
import {
  UseGafpriApiBankTypeReturn,
  UseGafpriPagesBankTypeReturn,
  UseGafpriAttributesBankTypeReturn,
  UseGafpriDataBankTypeReturn,
  UseGafpriPaginationsBankTypeReturn,
  useGafpriApiBankType,
  useGafpriPagesBankType,
  useGafpriAttributesBankType,
  useGafpriDataBankType,
  useGafpriPaginationsBankType,
  UseGafpriSubPagesBankTypeReturn,
  useGafpriSubPagesBankType,
} from '../Abstract';

export interface UseGafpriBankTypeReturn {
  attributes: UseGafpriAttributesBankTypeReturn;
  pages: UseGafpriPagesBankTypeReturn;
  subPages: UseGafpriSubPagesBankTypeReturn;
  paginations: UseGafpriPaginationsBankTypeReturn;
  api: UseGafpriApiBankTypeReturn;
  data: UseGafpriDataBankTypeReturn;
  error: UseErrorReturn;
}

export type UseGafpriBankTypeProps = {
  token: string | null;
  useSites: UseGafpriSitesReturn;
  useCurrencies: UseCurrenciesReturn;
};

export function useGafpriBankType({
  token,
  useSites,
  useCurrencies,
}: UseGafpriBankTypeProps): UseGafpriBankTypeReturn {
  /**
   * States
   *
   *
   */

  const error = useGafpriError();
  const attributes = useGafpriAttributesBankType({
    useSites,
    useCurrencies,
  });
  const subPages = useGafpriSubPagesBankType();
  const pages = useGafpriPagesBankType({ attributes, subPages });
  const data = useGafpriDataBankType({ token });
  const paginations = useGafpriPaginationsBankType({ data });
  const api = useGafpriApiBankType({
    token,
    useError: error,
    pages,
    attributes,
  });

  return {
    attributes,
    pages,
    subPages,
    paginations,
    api,
    data,
    error,
  };
}
