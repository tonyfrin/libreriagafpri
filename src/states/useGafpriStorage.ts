import { useGafpriError } from './useGafpriError';
import type { UseErrorReturn } from './useGafpriError';
import { UseSitesReturn } from './useGafpriSites';
import {
  UseGafpriApiStorageReturn,
  UseGafpriPagesStorageReturn,
  UseGafpriAttributesStorageReturn,
  UseGafpriDataStorageReturn,
  UseGafpriPaginationsStorageReturn,
  useGafpriApiStorage,
  useGafpriPagesStorage,
  useGafpriAttributesStorage,
  useGafpriDataStorage,
  useGafpriPaginationsStorage,
} from '../Abstract';

export interface UseGafpriStorageReturn {
  attributes: UseGafpriAttributesStorageReturn;
  pages: UseGafpriPagesStorageReturn;
  paginations: UseGafpriPaginationsStorageReturn;
  api: UseGafpriApiStorageReturn;
  data: UseGafpriDataStorageReturn;
  error: UseErrorReturn;
}

export type UseGafpriStorageProps = {
  token: string | null;
  useSites: UseSitesReturn;
};

export function useGafpriStorage({
  token,
  useSites,
}: UseGafpriStorageProps): UseGafpriStorageReturn {
  /**
   * States
   *
   *
   */

  const error = useGafpriError();
  const attributes = useGafpriAttributesStorage({ useError: error, useSites });
  const pages = useGafpriPagesStorage({ attributes });
  const data = useGafpriDataStorage({ token });
  const paginations = useGafpriPaginationsStorage({ data });
  const api = useGafpriApiStorage({
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
