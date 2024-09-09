import type { UseErrorReturn } from '../../../../states';
import { UseGafpriPagesShippingAreasReturn } from './useGafpriPagesShippingAreas';
import { UseGafpriAttributesShippingAreasReturn } from './useGafpriAttributesShippingAreas';
type Actions = {
    add: () => Promise<any>;
    update: () => void;
    erase: (id: number) => void;
};
export type UseGafpriApiShippingAreasReturn = {
    actions: Actions;
};
export type UseGafpriApiShippingAreasProps = {
    token: string | null;
    useError: UseErrorReturn;
    pages: UseGafpriPagesShippingAreasReturn;
    attributes: UseGafpriAttributesShippingAreasReturn;
};
export declare function useGafpriApiShippingAreas({ token, useError, pages, attributes, }: UseGafpriApiShippingAreasProps): UseGafpriApiShippingAreasReturn;
export {};
