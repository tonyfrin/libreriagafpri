import { useGafpriError } from './useGafpriError';
import type { UseErrorReturn } from './useGafpriError';
import type {
  UseGafpriAttributesShippingMethodsReturn,
  UseGafpriPagesShippingMethodsReturn,
  UseGafpriPaginationsShippingMethodsReturn,
  UseGafpriApiShippingMethodsReturn,
  UseGafpriDataShippingMethodsReturn,
} from '../Abstract';
import {
  useGafpriAttributesShippingMethods,
  useGafpriPagesShippingMethods,
  useGafpriPaginationsShippingMethods,
  useGafpriApiShippingMethods,
  useGafpriDataShippingMethods,
} from '../Abstract';

export interface UseGafpriShippingMethodsReturn {
  attributes: UseGafpriAttributesShippingMethodsReturn;
  pages: UseGafpriPagesShippingMethodsReturn;
  paginations: UseGafpriPaginationsShippingMethodsReturn;
  api: UseGafpriApiShippingMethodsReturn;
  data: UseGafpriDataShippingMethodsReturn;
  error: UseErrorReturn;
}

export type UseGafpriShippingMethodsProps = {
  token: string | null;
  closeModalPage: () => void;
};

export function useGafpriShippingMethods({
  token,
  closeModalPage,
}: UseGafpriShippingMethodsProps): UseGafpriShippingMethodsReturn {
  /**
   * States
   *
   *
   */
  const error = useGafpriError();
  const attributes = useGafpriAttributesShippingMethods();
  const pages = useGafpriPagesShippingMethods({ attributes, closeModalPage });
  const data = useGafpriDataShippingMethods({ token });
  const paginations = useGafpriPaginationsShippingMethods();
  const api = useGafpriApiShippingMethods({
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
