import { UseGafpriAttributesShippingMethodsReturn } from './useGafpriAttributesShippingMethods';
type Actions = {
    add: () => Promise<any>;
    update: () => Promise<any>;
    erase: (id: number) => Promise<any>;
};
export type UseGafpriApiShippingMethodsReturn = {
    actions: Actions;
};
export type UseGafpriApiShippingMethodsProps = {
    token: string | null;
    attributes: UseGafpriAttributesShippingMethodsReturn;
};
export declare function useGafpriApiShippingMethods({ token, attributes, }: UseGafpriApiShippingMethodsProps): UseGafpriApiShippingMethodsReturn;
export {};
