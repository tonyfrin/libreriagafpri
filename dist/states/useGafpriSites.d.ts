import type { UseErrorReturn } from './useGafpriError';
import { UseGafpriApiSitesReturn, UseGafpriPagesSitesReturn, UseGafpriAttributesSitesReturn, UseGafpriDataSitesReturn, UseGafpriPaginationsSitesReturn } from '../Abstract';
import { UseCurrenciesReturn } from './useGafpriCurrencies';
export interface UseGafpriSitesReturn {
    attributes: UseGafpriAttributesSitesReturn;
    pages: UseGafpriPagesSitesReturn;
    paginations: UseGafpriPaginationsSitesReturn;
    api: UseGafpriApiSitesReturn;
    data: UseGafpriDataSitesReturn;
    error: UseErrorReturn;
}
export type UseGafpriSitesProps = {
    token: string | null;
    useCurrencies: UseCurrenciesReturn;
};
export declare function useGafpriSites({ token, useCurrencies, }: UseGafpriSitesProps): UseGafpriSitesReturn;
