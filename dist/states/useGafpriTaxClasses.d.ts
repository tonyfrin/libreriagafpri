import { UseErrorReturn } from './useGafpriError';
import { UseGafpriAttributesTaxClassesReturn } from '../Abstract/states/taxes/taxClasses/useGafpriAttributesTaxClasses';
import { UseGafpriPagesTaxClassesReturn } from '../Abstract/states/taxes/taxClasses/useGafpriPagesTaxClasses';
import { UseGafpriDataTaxClassesReturn } from '../Abstract/states/taxes/taxClasses/useGafpriDataTaxClasses';
import { UseGafpriPaginationsTaxClassesReturn } from '../Abstract/states/taxes/taxClasses/useGafpriPaginationsTaxClasses';
import { UseGafpriApiTaxClassesReturn } from '../Abstract/states/taxes/taxClasses/useGafpriApiTaxClasses';
import { UseGafpriTaxRatesReturn } from './useGafpriTaxRates';
export interface UseGafpriTaxClassesReturn {
    attributes: UseGafpriAttributesTaxClassesReturn;
    pages: UseGafpriPagesTaxClassesReturn;
    paginations: UseGafpriPaginationsTaxClassesReturn;
    api: UseGafpriApiTaxClassesReturn;
    data: UseGafpriDataTaxClassesReturn;
    error: UseErrorReturn;
    useTaxRates: UseGafpriTaxRatesReturn;
}
export type UseGafpriTaxClassesProps = {
    token: string | null;
};
export declare function useGafpriTaxClasses({ token, }: UseGafpriTaxClassesProps): UseGafpriTaxClassesReturn;
