import type { UseErrorReturn } from './useGafpriError';
import type { UseGafpriEntityReturn } from './useGafpriEntity';
import { UseGafpriAttributesOrderReturnReturn, UseGafpriPagesOrderReturnReturn, UseGafpriPaginationsOrderReturnReturn, UseGafpriDataOrderReturnReturn, UseGafpriAttributesOrderReturnItemsReturn } from '../Abstract';
import { UseGafpriOrderReturn } from './useGafpriOrder';
export interface UseGafpriOrderReturnReturn {
    attributes: UseGafpriAttributesOrderReturnReturn;
    pages: UseGafpriPagesOrderReturnReturn;
    paginations: UseGafpriPaginationsOrderReturnReturn;
    data: UseGafpriDataOrderReturnReturn;
    error: UseErrorReturn;
    useProductItems: UseGafpriAttributesOrderReturnItemsReturn;
}
export type UseGafpriOrderReturnProps = {
    token: string | null;
    useEntity: UseGafpriEntityReturn;
    useOrder: UseGafpriOrderReturn;
};
export declare function useGafpriOrderReturn({ token, useEntity, useOrder, }: UseGafpriOrderReturnProps): UseGafpriOrderReturnReturn;
