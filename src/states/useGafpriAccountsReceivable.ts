import { useGafpriError } from './useGafpriError';
import type { UseErrorReturn } from './useGafpriError';
import {
  UseGafpriApiAccountsReceivableReturn,
  UseGafpriPagesAccountsReceivableReturn,
  UseGafpriAttributesAccountsReceivableReturn,
  UseGafpriDataAccountsReceivableReturn,
  UseGafpriPaginationsAccountsReceivableReturn,
  useGafpriApiAccountsReceivable,
  useGafpriPagesAccountsReceivable,
  useGafpriAttributesAccountsReceivable,
  useGafpriDataAccountsReceivable,
  useGafpriPaginationsAccountsReceivable,
} from '../Abstract';
import { UseGafpriEntityReturn } from './useGafpriEntity';

export interface UseGafpriAccountsReceivableReturn {
  attributes: UseGafpriAttributesAccountsReceivableReturn;
  pages: UseGafpriPagesAccountsReceivableReturn;
  paginations: UseGafpriPaginationsAccountsReceivableReturn;
  api: UseGafpriApiAccountsReceivableReturn;
  data: UseGafpriDataAccountsReceivableReturn;
  error: UseErrorReturn;
}

export type UseGafpriAccountsReceivableProps = {
  token: string | null;
  useEntity: UseGafpriEntityReturn;
};

export function useGafpriAccountsReceivable({
  token,
  useEntity,
}: UseGafpriAccountsReceivableProps): UseGafpriAccountsReceivableReturn {
  /**
   * States
   *
   *
   */

  const error = useGafpriError();
  const attributes = useGafpriAttributesAccountsReceivable();
  const pages = useGafpriPagesAccountsReceivable({
    useAttributes: attributes,
    useEntity,
  });
  const data = useGafpriDataAccountsReceivable({ token });
  const paginations = useGafpriPaginationsAccountsReceivable({ data });
  const api = useGafpriApiAccountsReceivable({
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
