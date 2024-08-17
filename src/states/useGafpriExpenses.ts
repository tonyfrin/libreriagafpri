import { useGafpriError } from './useGafpriError';
import type { UseErrorReturn } from './useGafpriError';
import type { UseGafpriEntityReturn } from './useGafpriEntity';
import {
  UseGafpriAttributesExpensesReturn,
  useGafpriAttributesExpenses,
  UseGafpriPagesExpensesReturn,
  useGafpriPagesExpenses,
  UseGafpriPaginationsExpensesReturn,
  useGafpriPaginationsExpenses,
  UseGafpriApiExpensesReturn,
  useGafpriApiExpenses,
  UseGafpriDataExpensesReturn,
  useGafpriDataExpenses,
} from '../Abstract';
import { UseGafpriProjectsReturn } from './useGafpriProjects';
import { UseCurrenciesReturn } from './useGafpriCurrencies';
import { UseGafpriExpensesTypeReturn } from './useGafpriExpensesType';

export interface UseGafpriExpensesReturn {
  attributes: UseGafpriAttributesExpensesReturn;
  pages: UseGafpriPagesExpensesReturn;
  paginations: UseGafpriPaginationsExpensesReturn;
  api: UseGafpriApiExpensesReturn;
  data: UseGafpriDataExpensesReturn;
  error: UseErrorReturn;
}

export type UseGafpriExpensesProps = {
  token: string | null;
  useEntity: UseGafpriEntityReturn;
  useProject: UseGafpriProjectsReturn;
  useCurrencies: UseCurrenciesReturn;
  useExpensesType: UseGafpriExpensesTypeReturn;
};

export function useGafpriExpenses({
  token,
  useEntity,
  useProject,
  useCurrencies,
  useExpensesType,
}: UseGafpriExpensesProps): UseGafpriExpensesReturn {
  /**
   * States
   *
   *
   */

  const error = useGafpriError();
  const attributes = useGafpriAttributesExpenses({
    currencies: useCurrencies,
    projects: useProject,
    expensesType: useExpensesType,
  });
  const data = useGafpriDataExpenses({ token });
  const paginations = useGafpriPaginationsExpenses({ useData: data });
  const pages = useGafpriPagesExpenses({
    useAttributes: attributes,
    useEntity,
  });
  const api = useGafpriApiExpenses({
    token,
    useError: error,
    useAttributes: attributes,
    usePages: pages,
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
