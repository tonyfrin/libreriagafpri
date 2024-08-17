import type { UseGafpriAttributesShippingAreasReturn } from './useGafpriAttributesShippingAreas';
import type { ShippingAreasAttributes } from './useGafpriDataShippingAreas';
type Data = {
    item?: ShippingAreasAttributes;
    success?: boolean;
    name: string;
    region: string[];
};
type State = {
    isFetching: boolean;
    isInit: boolean;
    isAdd: boolean;
    isUpdate: boolean;
    modalPage: boolean;
};
type Actions = {
    onFetching: () => void;
    onInit: () => void;
    onAdd: () => void;
    onUpdate: () => void;
    goUpdate: (id: number) => void;
    goAdd: () => void;
    returnInit: () => void;
    goUpdateFromAdd: (data: Data) => void;
    openModalPage: () => void;
    closeModalPage: () => void;
};
export type UseGafpriPagesShippingAreasProps = {
    attributes: UseGafpriAttributesShippingAreasReturn;
};
export type UseGafpriPagesShippingAreasReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriPagesShippingAreas({ attributes, }: UseGafpriPagesShippingAreasProps): UseGafpriPagesShippingAreasReturn;
export {};
