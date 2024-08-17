import { useGafpriError } from './useGafpriError';
import type { UseErrorReturn } from './useGafpriError';
import type { UseGafpriEntityReturn } from './useGafpriEntity';
import {
  UseGafpriAttributesBudgetReturn,
  useGafpriAttributesBudget,
  UseGafpriPagesBudgetReturn,
  useGafpriPagesBudget,
  UseGafpriPaginationsBudgetReturn,
  useGafpriPaginationsBudget,
  UseGafpriApiBudgetReturn,
  useGafpriApiBudget,
  UseGafpriDataBudgetReturn,
  useGafpriDataBudget,
  UseGafpriAttributesBudgetItemsReturn,
  useGafpriAttributesBudgetItems,
} from '../Abstract';
import { UseGafpriProductsReturn } from './useGafpriProducts';

export interface UseGafpriBudgetReturn {
  attributes: UseGafpriAttributesBudgetReturn;
  pages: UseGafpriPagesBudgetReturn;
  paginations: UseGafpriPaginationsBudgetReturn;
  api: UseGafpriApiBudgetReturn;
  data: UseGafpriDataBudgetReturn;
  error: UseErrorReturn;
  useProductItems: UseGafpriAttributesBudgetItemsReturn;
}

export type UseGafpriBudgetProps = {
  token: string | null;
  useEntity: UseGafpriEntityReturn;
  useProducts: UseGafpriProductsReturn;
};

export function useGafpriBudget({
  token,
  useEntity,
  useProducts,
}: UseGafpriBudgetProps): UseGafpriBudgetReturn {
  /**
   * States
   *
   *
   */

  const error = useGafpriError();
  const useProductItems = useGafpriAttributesBudgetItems({
    useError: error,
  });
  const attributes = useGafpriAttributesBudget({
    useProductItems,
  });
  const data = useGafpriDataBudget({ token });
  const paginations = useGafpriPaginationsBudget({ useData: data });
  const pages = useGafpriPagesBudget({
    useAttributes: attributes,
    useEntity,
    useProducts,
    useProductItems,
  });
  const api = useGafpriApiBudget({
    token,
    useError: error,
    useAttributes: attributes,
    usePages: pages,
    useProductItems,
  });

  return {
    attributes,
    pages,
    paginations,
    useProductItems,
    api,
    data,
    error,
  };
}
