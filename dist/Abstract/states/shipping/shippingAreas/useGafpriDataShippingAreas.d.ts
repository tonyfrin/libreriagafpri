import { SelectDefault } from '../../../../helpers';
export interface ShippingAreasAttributes {
    id: number;
    name: string;
    postalCodes: string[];
    cities: string[];
    states: string[];
    countries: string[];
}
type DeletedShippingAreas = {
    itemId: number;
};
type State = {
    items: ShippingAreasAttributes[] | null;
    isReady: boolean;
};
type Actions = {
    offItems: () => void;
    handleNewItem: (newItem: ShippingAreasAttributes) => void;
    handleUpdated: (updatedItem: ShippingAreasAttributes) => void;
    handleDeleted: ({ itemId }: DeletedShippingAreas) => void;
    getById: (id: number) => ShippingAreasAttributes | null;
    getOptions: () => SelectDefault[];
    getItems: () => Promise<any>;
    setItems: (value: ShippingAreasAttributes[] | null) => void;
    setIsReady: (value: boolean) => void;
};
export type UseGafpriDataShippingAreasReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriDataShippingAreasProps = {
    token: string | null;
};
export declare function useGafpriDataShippingAreas({ token, }: UseGafpriDataShippingAreasProps): UseGafpriDataShippingAreasReturn;
export {};
