import type { UseErrorReturn } from './useGafpriError';
import { UseGafpriApiAccountsReceivableReturn, UseGafpriPagesAccountsReceivableReturn, UseGafpriAttributesAccountsReceivableReturn, UseGafpriDataAccountsReceivableReturn, UseGafpriPaginationsAccountsReceivableReturn } from '../Abstract';
import { UseGafpriEntityReturn } from './useGafpriEntity';
export interface UseGafpriAccountsReceivableReturn {
    attributes: UseGafpriAttributesAccountsReceivableReturn;
    pages: UseGafpriPagesAccountsReceivableReturn;
    paginations: UseGafpriPaginationsAccountsReceivableReturn;
    api: UseGafpriApiAccountsReceivableReturn;
    data: UseGafpriDataAccountsReceivableReturn;
    error: UseErrorReturn;
}
export type UseGafpriAccountsReceivableProps = {
    token: string | null;
    useEntity: UseGafpriEntityReturn;
};
export declare function useGafpriAccountsReceivable({ token, useEntity, }: UseGafpriAccountsReceivableProps): UseGafpriAccountsReceivableReturn;
