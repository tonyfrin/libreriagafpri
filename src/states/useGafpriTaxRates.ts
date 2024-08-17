import { useGafpriError, UseErrorReturn } from './useGafpriError';
import {
  useGafpriAttributesTaxRates,
  UseGafpriAttributesTaxRatesReturn,
} from '../Abstract/states/taxes/taxRates/useGafpriAttributesTaxRates';
import {
  useGafpriPagesTaxRates,
  UseGafpriPagesTaxRatesReturn,
} from '../Abstract/states/taxes/taxRates/useGafpriPagesTaxRates';
import {
  useGafpriDataTaxRates,
  UseGafpriDataTaxRatesReturn,
} from '../Abstract/states/taxes/taxRates/useGafpriDataTaxRates';
import {
  useGafpriPaginationsTaxRates,
  UseGafpriPaginationsTaxRatesReturn,
} from '../Abstract/states/taxes/taxRates/useGafpriPaginationsTaxRates';
import {
  useGafpriApiTaxRates,
  UseGafpriApiTaxRatesReturn,
} from '../Abstract/states/taxes/taxRates/useGafpriApiTaxRates';

export interface UseGafpriTaxRatesReturn {
  attributes: UseGafpriAttributesTaxRatesReturn;
  pages: UseGafpriPagesTaxRatesReturn;
  paginations: UseGafpriPaginationsTaxRatesReturn;
  api: UseGafpriApiTaxRatesReturn;
  data: UseGafpriDataTaxRatesReturn;
  error: UseErrorReturn;
}

export type UseGafpriTaxRatesProps = {
  token: string | null;
  closeModalPage: () => void;
};

export function useGafpriTaxRates({
  token,
  closeModalPage,
}: UseGafpriTaxRatesProps): UseGafpriTaxRatesReturn {
  /**
   * States
   *
   *
   */
  const error = useGafpriError();
  const attributes = useGafpriAttributesTaxRates();
  const pages = useGafpriPagesTaxRates({ attributes, closeModalPage });
  const data = useGafpriDataTaxRates({ token });
  const paginations = useGafpriPaginationsTaxRates();
  const api = useGafpriApiTaxRates({
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
