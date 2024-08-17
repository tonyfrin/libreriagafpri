import type { UseErrorReturn } from './useGafpriError';
import { UseSitesReturn } from './useGafpriSites';
import { UseCurrenciesReturn } from './useGafpriCurrencies';
import { UseGafpriApiBankTypeReturn, UseGafpriPagesBankTypeReturn, UseGafpriAttributesBankTypeReturn, UseGafpriDataBankTypeReturn, UseGafpriPaginationsBankTypeReturn, UseGafpriSubPagesBankTypeReturn } from '../Abstract';
export interface UseGafpriBankTypeReturn {
    attributes: UseGafpriAttributesBankTypeReturn;
    pages: UseGafpriPagesBankTypeReturn;
    subPages: UseGafpriSubPagesBankTypeReturn;
    paginations: UseGafpriPaginationsBankTypeReturn;
    api: UseGafpriApiBankTypeReturn;
    data: UseGafpriDataBankTypeReturn;
    error: UseErrorReturn;
}
export type UseGafpriBankTypeProps = {
    token: string | null;
    useSites: UseSitesReturn;
    useCurrencies: UseCurrenciesReturn;
};
export declare function useGafpriBankType({ token, useSites, useCurrencies, }: UseGafpriBankTypeProps): UseGafpriBankTypeReturn;
