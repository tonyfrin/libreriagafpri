export interface ShippingMethodsAttributes {
    id: number;
    shippingAreasId: number;
    name: string;
    description: string;
    cost: number;
    type: string;
    roles: number[];
    workDaysHours: Record<number, string>;
    preparationTime: number;
    pickupTime: number;
    deliveryTime: number;
    typeStart: string;
    valueStart: string;
    conditional: boolean;
    typeConditional?: string;
    valueConditional?: string;
    status: string;
    createdAt: Date;
    modifiedAt: Date;
}
type DeletedShippingMethods = {
    itemId: number;
};
type State = {
    items: ShippingMethodsAttributes[] | null;
    isReady: boolean;
};
type Actions = {
    setIsReady: (value: boolean) => void;
    handleNewItem: (newItem: ShippingMethodsAttributes) => void;
    handleUpdated: (updatedItem: ShippingMethodsAttributes) => void;
    handleDeleted: ({ itemId }: DeletedShippingMethods) => void;
    getById: (id: number) => ShippingMethodsAttributes | null;
    filterByShippingAreasId: (methods: ShippingMethodsAttributes[], targetShippingAreasId: number) => ShippingMethodsAttributes[];
    getItems: () => Promise<any>;
    setItems: (value: ShippingMethodsAttributes[]) => void;
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
