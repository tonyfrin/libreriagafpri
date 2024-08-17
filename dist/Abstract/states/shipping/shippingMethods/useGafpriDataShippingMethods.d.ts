export interface ShippingMethodsAttributes {
    id: number;
    shippingAreasId: string;
    name: string;
    description: string;
    cost: string;
    type: string;
    shippingTimeDays: string;
    availableShippingServices: string;
    taxStatus: string;
    taxClass: string;
    status: string;
    createdAt: Date;
    modifiedAt: Date;
}
interface ShippingMethodsData {
    data: {
        items: ShippingMethodsAttributes[] | [] | null;
    };
}
type DeletedShippingMethods = {
    itemId: number;
};
type State = {
    items: ShippingMethodsData;
    isReady: boolean;
};
type Actions = {
    offItems: () => void;
    handleNewItem: (newItem: ShippingMethodsAttributes) => void;
    handleUpdated: (updatedItem: ShippingMethodsAttributes) => void;
    handleDeleted: ({ itemId }: DeletedShippingMethods) => void;
    getById: (id: number) => ShippingMethodsAttributes | null;
    filterByShippingAreasId: (targetShippingAreasId: number) => ShippingMethodsAttributes[];
};
export type UseGafpriDataShippingMethodsReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriDataShippingMethodsProps = {
    token: string | null;
};
export declare function useGafpriDataShippingMethods({ token, }: UseGafpriDataShippingMethodsProps): UseGafpriDataShippingMethodsReturn;
export {};
