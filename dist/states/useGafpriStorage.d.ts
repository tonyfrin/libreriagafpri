import type { UseErrorReturn } from './useGafpriError';
import { UseSitesReturn } from './useGafpriSites';
import { UseGafpriApiStorageReturn, UseGafpriPagesStorageReturn, UseGafpriAttributesStorageReturn, UseGafpriDataStorageReturn, UseGafpriPaginationsStorageReturn } from '../Abstract';
export interface UseGafpriStorageReturn {
    attributes: UseGafpriAttributesStorageReturn;
    pages: UseGafpriPagesStorageReturn;
    paginations: UseGafpriPaginationsStorageReturn;
    api: UseGafpriApiStorageReturn;
    data: UseGafpriDataStorageReturn;
    error: UseErrorReturn;
}
export type UseGafpriStorageProps = {
    token: string | null;
    useSites: UseSitesReturn;
};
export declare function useGafpriStorage({ token, useSites, }: UseGafpriStorageProps): UseGafpriStorageReturn;
