import { useGafpriError } from './useGafpriError';
import type { UseErrorReturn } from './useGafpriError';
import type { UseGafpriEntityReturn } from './useGafpriEntity';
import {
  UseGafpriAttributesOrderReturn,
  useGafpriAttributesOrder,
  UseGafpriPagesOrderReturn,
  useGafpriPagesOrder,
  UseGafpriPaginationsOrderReturn,
  useGafpriPaginationsOrder,
  UseGafpriApiOrderReturn,
  useGafpriApiOrder,
  UseGafpriDataOrderReturn,
  useGafpriDataOrder,
  UseGafpriAttributesOrderItemsReturn,
  useGafpriAttributesOrderItems,
} from '../Abstract';
import { UseGafpriProductsReturn } from './useGafpriProducts';
import { SiteOptions } from './sitesOptions';

export interface UseGafpriOrderReturn {
  attributes: UseGafpriAttributesOrderReturn;
  pages: UseGafpriPagesOrderReturn;
  paginations: UseGafpriPaginationsOrderReturn;
  api: UseGafpriApiOrderReturn;
  data: UseGafpriDataOrderReturn;
  error: UseErrorReturn;
  useProductItems: UseGafpriAttributesOrderItemsReturn;
}

export type UseGafpriOrderProps = {
  token: string | null;
  useEntity: UseGafpriEntityReturn;
  useProducts: UseGafpriProductsReturn;
  siteOptions: SiteOptions;
  salesChannel: string;
};

export function useGafpriOrder({
  token,
  useEntity,
  useProducts,
  siteOptions,
  salesChannel,
}: UseGafpriOrderProps): UseGafpriOrderReturn {
  /**
   * States
   *
   *
   */

  const error = useGafpriError();
  const useProductItems = useGafpriAttributesOrderItems({
    useError: error,
    siteOptions,
  });
  const attributes = useGafpriAttributesOrder({
    salesChannel,
    useProductItems,
  });
  const data = useGafpriDataOrder({ token });
  const paginations = useGafpriPaginationsOrder({ useData: data });
  const pages = useGafpriPagesOrder({
    useAttributes: attributes,
    useEntity,
    useProducts,
    useProductItems,
  });
  const api = useGafpriApiOrder({
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
