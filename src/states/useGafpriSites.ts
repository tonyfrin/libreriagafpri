import { useGafpriError } from './useGafpriError';
import type { UseErrorReturn } from './useGafpriError';
import {
  UseGafpriApiSitesReturn,
  UseGafpriPagesSitesReturn,
  UseGafpriAttributesSitesReturn,
  UseGafpriDataSitesReturn,
  UseGafpriPaginationsSitesReturn,
  useGafpriApiSites,
  useGafpriPagesSites,
  useGafpriAttributesSites,
  useGafpriDataSites,
  useGafpriPaginationsSites,
} from '../Abstract';
import { UseCurrenciesReturn } from './useGafpriCurrencies';

export interface UseGafpriSitesReturn {
  attributes: UseGafpriAttributesSitesReturn;
  pages: UseGafpriPagesSitesReturn;
  paginations: UseGafpriPaginationsSitesReturn;
  api: UseGafpriApiSitesReturn;
  data: UseGafpriDataSitesReturn;
  error: UseErrorReturn;
}

export type UseGafpriSitesProps = {
  token: string | null;
  useCurrencies: UseCurrenciesReturn;
};

export function useGafpriSites({
  token,
  useCurrencies,
}: UseGafpriSitesProps): UseGafpriSitesReturn {
  /**
   * States
   *
   *
   */

  const error = useGafpriError();
  const attributes = useGafpriAttributesSites({
    useError: error,
    useCurrencies,
  });
  const pages = useGafpriPagesSites({ attributes });
  const data = useGafpriDataSites({ token });
  const paginations = useGafpriPaginationsSites();
  const api = useGafpriApiSites({
    token,
    attributes,
  });

  return {
    attributes,
    pages,
    paginations,
    api,
    data,
    error,
  };
}
