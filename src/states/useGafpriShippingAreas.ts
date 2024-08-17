import { useGafpriError } from './useGafpriError';
import type { UseErrorReturn } from './useGafpriError';
import {
  useGafpriAttributesShippingAreas,
  useGafpriPagesShippingAreas,
  useGafpriApiShippingAreas,
  useGafpriDataShippingAreas,
  useGafpriPaginationsShippingAreas,
} from '../Abstract';
import type {
  UseGafpriAttributesShippingAreasReturn,
  UseGafpriPagesShippingAreasReturn,
  UseGafpriApiShippingAreasReturn,
  UseGafpriDataShippingAreasReturn,
  UseGafpriPaginationsShippingAreasReturn,
} from '../Abstract';
import { useGafpriShippingMethods } from './useGafpriShippingMethods';
import type { UseGafpriShippingMethodsReturn } from './useGafpriShippingMethods';

export interface UseGafpriShippingAreasReturn {
  attributes: UseGafpriAttributesShippingAreasReturn;
  pages: UseGafpriPagesShippingAreasReturn;
  paginations: UseGafpriPaginationsShippingAreasReturn;
  api: UseGafpriApiShippingAreasReturn;
  data: UseGafpriDataShippingAreasReturn;
  error: UseErrorReturn;
  useShippingMethoods: UseGafpriShippingMethodsReturn;
}

export type UseGafpriShippingAreasProps = {
  token: string | null;
};

export function useGafpriShippingAreas({
  token,
}: UseGafpriShippingAreasProps): UseGafpriShippingAreasReturn {
  /**
   * States
   *
   *
   */
  const error = useGafpriError();
  const attributes = useGafpriAttributesShippingAreas();
  const pages = useGafpriPagesShippingAreas({ attributes });
  const data = useGafpriDataShippingAreas({ token });
  const paginations = useGafpriPaginationsShippingAreas({ data });
  const api = useGafpriApiShippingAreas({
    token,
    useError: error,
    pages,
    attributes,
  });
  const useShippingMethoods = useGafpriShippingMethods({
    token,
    closeModalPage: pages.actions.closeModalPage,
  });

  return {
    attributes,
    pages,
    paginations,
    api,
    data,
    error,
    useShippingMethoods,
  };
}
