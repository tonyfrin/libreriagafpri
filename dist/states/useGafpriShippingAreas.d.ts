import type { UseErrorReturn } from './useGafpriError';
import type { UseGafpriAttributesShippingAreasReturn, UseGafpriPagesShippingAreasReturn, UseGafpriApiShippingAreasReturn, UseGafpriDataShippingAreasReturn, UseGafpriPaginationsShippingAreasReturn } from '../Abstract';
import type { UseGafpriShippingMethodsReturn } from './useGafpriShippingMethods';
export interface UseGafpriShippingAreasReturn {
    attributes: UseGafpriAttributesShippingAreasReturn;
    pages: UseGafpriPagesShippingAreasReturn;
    paginations: UseGafpriPaginationsShippingAreasReturn;
    api: UseGafpriApiShippingAreasReturn;
    data: UseGafpriDataShippingAreasReturn;
    error: UseErrorReturn;
    useShippingMethoods: UseGafpriShippingMethodsReturn;
}
export type UseGafpriShippingAreasProps = {
    token: string | null;
};
export declare function useGafpriShippingAreas({ token, }: UseGafpriShippingAreasProps): UseGafpriShippingAreasReturn;
