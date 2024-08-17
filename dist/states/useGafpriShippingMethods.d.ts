import type { UseErrorReturn } from './useGafpriError';
import type { UseGafpriAttributesShippingMethodsReturn, UseGafpriPagesShippingMethodsReturn, UseGafpriPaginationsShippingMethodsReturn, UseGafpriApiShippingMethodsReturn, UseGafpriDataShippingMethodsReturn } from '../Abstract';
export interface UseGafpriShippingMethodsReturn {
    attributes: UseGafpriAttributesShippingMethodsReturn;
    pages: UseGafpriPagesShippingMethodsReturn;
    paginations: UseGafpriPaginationsShippingMethodsReturn;
    api: UseGafpriApiShippingMethodsReturn;
    data: UseGafpriDataShippingMethodsReturn;
    error: UseErrorReturn;
}
export type UseGafpriShippingMethodsProps = {
    token: string | null;
    closeModalPage: () => void;
};
export declare function useGafpriShippingMethods({ token, closeModalPage, }: UseGafpriShippingMethodsProps): UseGafpriShippingMethodsReturn;
