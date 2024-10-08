import { useGafpriError } from './useGafpriError';
import type { UseErrorReturn } from './useGafpriError';
import { UseGafpriSitesReturn } from './useGafpriSites';
import { UseUserReturn } from './useGafpriUser';
import {
  UseGafpriApiCashRegisterTypeReturn,
  UseGafpriPagesCashRegisterTypeReturn,
  UseGafpriAttributesCashRegisterTypeReturn,
  UseGafpriDataCashRegisterTypeReturn,
  UseGafpriPaginationsCashRegisterTypeReturn,
  useGafpriApiCashRegisterType,
  useGafpriPagesCashRegisterType,
  useGafpriAttributesCashRegisterType,
  useGafpriDataCashRegisterType,
  useGafpriPaginationsCashRegisterType,
  UseGafpriAttributesCashRegisterTypeUserReturn,
  useGafpriAttributesCashRegisterTypeUser,
  UseGafpriSubPagesCashRegisterTypeReturn,
  useGafpriSubPagesCashRegisterType,
} from '../Abstract';

export interface UseGafpriCashRegisterTypeReturn {
  crtu: UseGafpriAttributesCashRegisterTypeUserReturn;
  attributes: UseGafpriAttributesCashRegisterTypeReturn;
  pages: UseGafpriPagesCashRegisterTypeReturn;
  subPages: UseGafpriSubPagesCashRegisterTypeReturn;
  paginations: UseGafpriPaginationsCashRegisterTypeReturn;
  api: UseGafpriApiCashRegisterTypeReturn;
  data: UseGafpriDataCashRegisterTypeReturn;
  error: UseErrorReturn;
}

export type UseGafpriCashRegisterTypeProps = {
  token: string | null;
  useSites: UseGafpriSitesReturn;
  useUser: UseUserReturn;
};

export function useGafpriCashRegisterType({
  token,
  useSites,
  useUser,
}: UseGafpriCashRegisterTypeProps): UseGafpriCashRegisterTypeReturn {
  /**
   * States
   *
   *
   */

  const error = useGafpriError();
  const crtu = useGafpriAttributesCashRegisterTypeUser({ useUser });
  const attributes = useGafpriAttributesCashRegisterType({
    useSites,
    useCrtu: crtu,
  });
  const subPages = useGafpriSubPagesCashRegisterType();
  const pages = useGafpriPagesCashRegisterType({ attributes, subPages });
  const data = useGafpriDataCashRegisterType({ token });
  const paginations = useGafpriPaginationsCashRegisterType({ data });
  const api = useGafpriApiCashRegisterType({
    token,
    useError: error,
    pages,
    attributes,
    crtu,
  });

  return {
    attributes,
    pages,
    subPages,
    paginations,
    api,
    data,
    error,
    crtu,
  };
}
