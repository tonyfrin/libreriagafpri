import { useGafpriError } from './useGafpriError';
import type { UseErrorReturn } from './useGafpriError';
import {
  UseGafpriApiProjectsReturn,
  UseGafpriPagesProjectsReturn,
  UseGafpriAttributesProjectsReturn,
  UseGafpriDataProjectsReturn,
  UseGafpriPaginationsProjectsReturn,
  useGafpriApiProjects,
  useGafpriPagesProjects,
  useGafpriAttributesProjects,
  useGafpriDataProjects,
  useGafpriPaginationsProjects,
} from '../Abstract';

export interface UseGafpriProjectsReturn {
  attributes: UseGafpriAttributesProjectsReturn;
  pages: UseGafpriPagesProjectsReturn;
  paginations: UseGafpriPaginationsProjectsReturn;
  api: UseGafpriApiProjectsReturn;
  data: UseGafpriDataProjectsReturn;
  error: UseErrorReturn;
}

export type UseGafpriProjectsProps = {
  token: string | null;
};

export function useGafpriProjects({
  token,
}: UseGafpriProjectsProps): UseGafpriProjectsReturn {
  /**
   * States
   *
   *
   */

  const error = useGafpriError();
  const attributes = useGafpriAttributesProjects();
  const pages = useGafpriPagesProjects({ attributes });
  const data = useGafpriDataProjects({ token });
  const paginations = useGafpriPaginationsProjects({ data });
  const api = useGafpriApiProjects({
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
