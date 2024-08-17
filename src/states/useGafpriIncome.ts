import { useGafpriError } from './useGafpriError';
import type { UseErrorReturn } from './useGafpriError';
import type { UseGafpriEntityReturn } from './useGafpriEntity';
import {
  UseGafpriAttributesIncomeReturn,
  useGafpriAttributesIncome,
  UseGafpriPagesIncomeReturn,
  useGafpriPagesIncome,
  UseGafpriPaginationsIncomeReturn,
  useGafpriPaginationsIncome,
  UseGafpriApiIncomeReturn,
  useGafpriApiIncome,
  UseGafpriDataIncomeReturn,
  useGafpriDataIncome,
} from '../Abstract';
import { UseGafpriProjectsReturn } from './useGafpriProjects';
import { UseCurrenciesReturn } from './useGafpriCurrencies';

export interface UseGafpriIncomeReturn {
  attributes: UseGafpriAttributesIncomeReturn;
  pages: UseGafpriPagesIncomeReturn;
  paginations: UseGafpriPaginationsIncomeReturn;
  api: UseGafpriApiIncomeReturn;
  data: UseGafpriDataIncomeReturn;
  error: UseErrorReturn;
}

export type UseGafpriIncomeProps = {
  token: string | null;
  useEntity: UseGafpriEntityReturn;
  useProject: UseGafpriProjectsReturn;
  useCurrencies: UseCurrenciesReturn;
};

export function useGafpriIncome({
  token,
  useEntity,
  useProject,
  useCurrencies,
}: UseGafpriIncomeProps): UseGafpriIncomeReturn {
  /**
   * States
   *
   *
   */

  const error = useGafpriError();
  const attributes = useGafpriAttributesIncome({
    currencies: useCurrencies,
    projects: useProject,
  });
  const data = useGafpriDataIncome({ token });
  const paginations = useGafpriPaginationsIncome({ useData: data });
  const pages = useGafpriPagesIncome({
    useAttributes: attributes,
    useEntity,
  });
  const api = useGafpriApiIncome({
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
