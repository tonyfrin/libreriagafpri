import { useGafpriError } from './useGafpriError';
import type { UseErrorReturn } from './useGafpriError';
import { UseCurrenciesReturn } from './useGafpriCurrencies';
import {
  UseGafpriApiWalletAccountReturn,
  UseGafpriPagesWalletAccountReturn,
  UseGafpriAttributesWalletAccountReturn,
  UseGafpriDataWalletAccountReturn,
  UseGafpriPaginationsWalletAccountReturn,
  useGafpriApiWalletAccount,
  useGafpriPagesWalletAccount,
  useGafpriAttributesWalletAccount,
  useGafpriDataWalletAccount,
  useGafpriPaginationsWalletAccount,
} from '../Abstract';
import { UseUserReturn } from './useGafpriUser';

export interface UseGafpriWalletAccountReturn {
  attributes: UseGafpriAttributesWalletAccountReturn;
  pages: UseGafpriPagesWalletAccountReturn;
  paginations: UseGafpriPaginationsWalletAccountReturn;
  api: UseGafpriApiWalletAccountReturn;
  data: UseGafpriDataWalletAccountReturn;
  error: UseErrorReturn;
}

export type UseGafpriWalletAccountProps = {
  token: string | null;
  useCurrencies: UseCurrenciesReturn;
  useUser: UseUserReturn;
};

export function useGafpriWalletAccount({
  token,
  useCurrencies,
  useUser,
}: UseGafpriWalletAccountProps): UseGafpriWalletAccountReturn {
  /**
   * States
   *
   *
   */

  const error = useGafpriError();
  const attributes = useGafpriAttributesWalletAccount({
    useCurrencies,
  });
  const pages = useGafpriPagesWalletAccount({
    attributes,
    useUser,
    useError: error,
  });
  const data = useGafpriDataWalletAccount({ token });
  const paginations = useGafpriPaginationsWalletAccount({ data });
  const api = useGafpriApiWalletAccount({
    token,
    useError: error,
    pages,
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
