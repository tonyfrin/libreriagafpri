import { SelectDefault } from '../../../../helpers';
import { ShippingMethodsAttributes } from '../shippingMethods';
export interface ShippingAreasAttributes {
    id: number;
    name: string;
    region: string[];
    shippingMethods: ShippingMethodsAttributes[];
    createdAt: Date;
    modifiedAt: Date;
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
