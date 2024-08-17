import type { UseErrorReturn } from './useGafpriError';
import type { UseGafpriEntityReturn } from './useGafpriEntity';
import { UseGafpriAttributesOrderReturn, UseGafpriPagesOrderReturn, UseGafpriPaginationsOrderReturn, UseGafpriApiOrderReturn, UseGafpriDataOrderReturn, UseGafpriAttributesOrderItemsReturn } from '../Abstract';
import { UseGafpriProductsReturn } from './useGafpriProducts';
import { SiteOptions } from './sitesOptions';
export interface UseGafpriOrderReturn {
    attributes: UseGafpriAttributesOrderReturn;
    pages: UseGafpriPagesOrderReturn;
    paginations: UseGafpriPaginationsOrderReturn;
    api: UseGafpriApiOrderReturn;
    data: UseGafpriDataOrderReturn;
    error: UseErrorReturn;
    useProductItems: UseGafpriAttributesOrderItemsReturn;
}
export type UseGafpriOrderProps = {
    token: string | null;
    useEntity: UseGafpriEntityReturn;
    useProducts: UseGafpriProductsReturn;
    siteOptions: SiteOptions;
    salesChannel: string;
};
export declare function useGafpriOrder({ token, useEntity, useProducts, siteOptions, salesChannel, }: UseGafpriOrderProps): UseGafpriOrderReturn;
