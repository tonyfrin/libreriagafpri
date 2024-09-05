import { UseErrorReturn } from '../../../../states';
import { UseGafpriPagesShippingMethodsReturn } from './useGafpriPagesShippingMethods';
import { UseGafpriAttributesShippingMethodsReturn } from './useGafpriAttributesShippingMethods';
type Actions = {
    add: () => void;
    update: () => void;
    erase: (id: number) => void;
};
export type UseGafpriApiShippingMethodsReturn = {
    actions: Actions;
};
export type UseGafpriApiShippingMethodsProps = {
    token: string | null;
    useError: UseErrorReturn;
    pages: UseGafpriPagesShippingMethodsReturn;
    attributes: UseGafpriAttributesShippingMethodsReturn;
};
export declare function useGafpriApiShippingMethods({ token, useError, pages, attributes, }: UseGafpriApiShippingMethodsProps): UseGafpriApiShippingMethodsReturn;
export {};
