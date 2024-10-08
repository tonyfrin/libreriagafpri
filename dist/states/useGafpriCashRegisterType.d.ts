import type { UseErrorReturn } from './useGafpriError';
import { UseGafpriSitesReturn } from './useGafpriSites';
import { UseUserReturn } from './useGafpriUser';
import { UseGafpriApiCashRegisterTypeReturn, UseGafpriPagesCashRegisterTypeReturn, UseGafpriAttributesCashRegisterTypeReturn, UseGafpriDataCashRegisterTypeReturn, UseGafpriPaginationsCashRegisterTypeReturn, UseGafpriAttributesCashRegisterTypeUserReturn, UseGafpriSubPagesCashRegisterTypeReturn } from '../Abstract';
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
export declare function useGafpriCashRegisterType({ token, useSites, useUser, }: UseGafpriCashRegisterTypeProps): UseGafpriCashRegisterTypeReturn;
