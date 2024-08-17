import { useGafpriError } from './useGafpriError';
import type { UseErrorReturn } from './useGafpriError';
import type { UseTypeDocumentIdReturn } from './useGafpriTypeDocumentId';
import {
  useGafpriAttributesEntity,
  useGafpriDataEntity,
  useGafpriPagesEntity,
  useGafpriApiEntity,
  useGafpriPaginationsEntity,
} from '../Abstract';
import type {
  UseGafpriDataEntityReturn,
  UseGafpriAttributesEntityReturn,
  UseGafpriPagesEntityReturn,
  UseGafpriPaginationsEntityReturn,
  UseGafpriApiEntityReturn,
  UseGafpriApiEntityReturnDataCreate,
  UseGafpriApiEntityReturnDataUpdate,
  UseGafpriApiEntityReturnDataDelete,
} from '../Abstract';

export interface UseGafpriEntityReturn {
  attributes: UseGafpriAttributesEntityReturn;
  pages: UseGafpriPagesEntityReturn;
  paginations: UseGafpriPaginationsEntityReturn;
  api: UseGafpriApiEntityReturn;
  data: UseGafpriDataEntityReturn;
  error: UseErrorReturn;
}

export type UseGafpriEntityProps = {
  token: string | null;
  useTypeDocumentId: UseTypeDocumentIdReturn;
  getAddData?: (data: UseGafpriApiEntityReturnDataCreate) => void;
  getUpdateData?: (
    data:
      | UseGafpriApiEntityReturnDataCreate
      | UseGafpriApiEntityReturnDataUpdate
      | UseGafpriApiEntityReturnDataDelete
  ) => void;
};

export function useGafpriEntity({
  token,
  useTypeDocumentId,
  getAddData,
  getUpdateData,
}: UseGafpriEntityProps): UseGafpriEntityReturn {
  /**
   * States
   *
   *
   */

  const error = useGafpriError();
  const attributes = useGafpriAttributesEntity({
    useError: error,
    useTypeDocumentId,
  });
  const pages = useGafpriPagesEntity({ useAttributes: attributes });
  const data = useGafpriDataEntity({ token });
  const paginations = useGafpriPaginationsEntity({ useData: data });
  const api = useGafpriApiEntity({
    token,
    useError: error,
    useAttributes: attributes,
    usePages: pages,
    getAddData,
    getUpdateData,
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
