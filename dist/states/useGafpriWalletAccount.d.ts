import type { UseErrorReturn } from './useGafpriError';
import { UseCurrenciesReturn } from './useGafpriCurrencies';
import { UseGafpriApiWalletAccountReturn, UseGafpriPagesWalletAccountReturn, UseGafpriAttributesWalletAccountReturn, UseGafpriDataWalletAccountReturn, UseGafpriPaginationsWalletAccountReturn } from '../Abstract';
import { UseUserReturn } from './useGafpriUser';
export interface UseGafpriWalletAccountReturn {
    attributes: UseGafpriAttributesWalletAccountReturn;
    pages: UseGafpriPagesWalletAccountReturn;
    paginations: UseGafpriPaginationsWalletAccountReturn;
    api: UseGafpriApiWalletAccountReturn;
    data: UseGafpriDataWalletAccountReturn;
    error: UseErrorReturn;
}
export type UseGafpriWalletAccountProps = {
    token: string | null;
    useCurrencies: UseCurrenciesReturn;
    useUser: UseUserReturn;
};
export declare function useGafpriWalletAccount({ token, useCurrencies, useUser, }: UseGafpriWalletAccountProps): UseGafpriWalletAccountReturn;
