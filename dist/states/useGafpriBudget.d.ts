import type { UseErrorReturn } from './useGafpriError';
import type { UseGafpriEntityReturn } from './useGafpriEntity';
import { UseGafpriAttributesBudgetReturn, UseGafpriPagesBudgetReturn, UseGafpriPaginationsBudgetReturn, UseGafpriApiBudgetReturn, UseGafpriDataBudgetReturn, UseGafpriAttributesBudgetItemsReturn } from '../Abstract';
import { UseGafpriProductsReturn } from './useGafpriProducts';
export interface UseGafpriBudgetReturn {
    attributes: UseGafpriAttributesBudgetReturn;
    pages: UseGafpriPagesBudgetReturn;
    paginations: UseGafpriPaginationsBudgetReturn;
    api: UseGafpriApiBudgetReturn;
    data: UseGafpriDataBudgetReturn;
    error: UseErrorReturn;
    useProductItems: UseGafpriAttributesBudgetItemsReturn;
}
export type UseGafpriBudgetProps = {
    token: string | null;
    useEntity: UseGafpriEntityReturn;
    useProducts: UseGafpriProductsReturn;
};
export declare function useGafpriBudget({ token, useEntity, useProducts, }: UseGafpriBudgetProps): UseGafpriBudgetReturn;
