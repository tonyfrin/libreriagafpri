import { SelectDefault } from '../../../../helpers';
export interface ShippingAreasAttributes {
    id: number;
    name: string;
    postalCodes: string[];
    cities: string[];
    states: string[];
    countries: string[];
}
interface ShippingAreasData {
    data: {
        items: ShippingAreasAttributes[] | [] | null;
    };
}
type DeletedShippingAreas = {
    itemId: number;
};
type State = {
    items: ShippingAreasData;
    isReady: boolean;
};
type Actions = {
    offItems: () => void;
    handleNewItem: (newItem: ShippingAreasAttributes) => void;
    handleUpdated: (updatedItem: ShippingAreasAttributes) => void;
    handleDeleted: ({ itemId }: DeletedShippingAreas) => void;
    getById: (id: number) => ShippingAreasAttributes | null;
    getOptions: () => SelectDefault[];
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
