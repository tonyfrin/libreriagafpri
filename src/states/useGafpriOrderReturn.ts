import { useGafpriError } from './useGafpriError';
import type { UseErrorReturn } from './useGafpriError';
import type { UseGafpriEntityReturn } from './useGafpriEntity';
import {
  UseGafpriAttributesOrderReturnReturn,
  useGafpriAttributesOrderReturn,
  UseGafpriPagesOrderReturnReturn,
  useGafpriPagesOrderReturn,
  UseGafpriPaginationsOrderReturnReturn,
  useGafpriPaginationsOrderReturn,
  UseGafpriDataOrderReturnReturn,
  useGafpriDataOrderReturn,
  UseGafpriAttributesOrderReturnItemsReturn,
  useGafpriAttributesOrderReturnItems,
} from '../Abstract';
import { UseGafpriOrderReturn } from './useGafpriOrder';

export interface UseGafpriOrderReturnReturn {
  attributes: UseGafpriAttributesOrderReturnReturn;
  pages: UseGafpriPagesOrderReturnReturn;
  paginations: UseGafpriPaginationsOrderReturnReturn;
  data: UseGafpriDataOrderReturnReturn;
  error: UseErrorReturn;
  useProductItems: UseGafpriAttributesOrderReturnItemsReturn;
}

export type UseGafpriOrderReturnProps = {
  token: string | null;
  useEntity: UseGafpriEntityReturn;
  useOrder: UseGafpriOrderReturn;
};

export function useGafpriOrderReturn({
  token,
  useEntity,
  useOrder,
}: UseGafpriOrderReturnProps): UseGafpriOrderReturnReturn {
  /**
   * States
   *
   *
   */

  const error = useGafpriError();
  const useProductItems = useGafpriAttributesOrderReturnItems({
    useError: error,
  });
  const attributes = useGafpriAttributesOrderReturn({
    useProductItems,
  });
  const data = useGafpriDataOrderReturn({ token });
  const paginations = useGafpriPaginationsOrderReturn({ useData: data });
  const pages = useGafpriPagesOrderReturn({
    useAttributes: attributes,
    useOrder,
    useEntity,
    useProductItems,
    useError: error,
  });

  return {
    attributes,
    pages,
    paginations,
    useProductItems,
    data,
    error,
  };
}
