import { useGafpriError } from './useGafpriError';
import type { UseErrorReturn } from './useGafpriError';
import {
  UseGafpriAttributesExpensesTypeReturn,
  useGafpriAttributesExpensesType,
  UseGafpriApiExpensesTypeReturn,
  useGafpriApiExpensesType,
  UseGafpriPagesExpensesTypeReturn,
  useGafpriPagesExpensesType,
  UseGafpriDataExpensesTypeReturn,
  useGafpriDataExpensesType,
  UseGafpriPaginationsExpensesTypeReturn,
  useGafpriPaginationsExpensesType,
} from '../Abstract';

export interface UseGafpriExpensesTypeReturn {
  attributes: UseGafpriAttributesExpensesTypeReturn;
  pages: UseGafpriPagesExpensesTypeReturn;
  paginations: UseGafpriPaginationsExpensesTypeReturn;
  api: UseGafpriApiExpensesTypeReturn;
  data: UseGafpriDataExpensesTypeReturn;
  error: UseErrorReturn;
}

export type UseGafpriExpensesTypeProps = {
  token: string | null;
};

export function useGafpriExpensesType({
  token,
}: UseGafpriExpensesTypeProps): UseGafpriExpensesTypeReturn {
  /**
   * States
   *
   *
   */

  const error = useGafpriError();
  const attributes = useGafpriAttributesExpensesType({
    useError: error,
  });
  const pages = useGafpriPagesExpensesType({ attributes });
  const data = useGafpriDataExpensesType({ token, attributes });
  const paginations = useGafpriPaginationsExpensesType();
  const api = useGafpriApiExpensesType({
    token,
    useError: error,
    pages,
    attributes,
    data,
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
