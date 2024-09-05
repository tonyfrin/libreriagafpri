import { EntityAttributes } from '../entity';
import { UseGafpriAttributesOrderItemsReturn } from '../productsItems';
type State = {
    customerId: number;
    customerIdValid: boolean;
    referredId: number;
    referredIdValid: boolean;
    note: string;
    salesChannel: string;
    currentId: number;
    entity: EntityAttributes | null;
};
type Actions = {
    infoReset: () => void;
    validationCustomerId: (value: number) => boolean;
    validationReferredId: (value: number) => boolean;
    changeCustomerId: (value: number) => void;
    changeReferredId: (value: number) => void;
    changeNote: (value: string) => void;
    setCurrentId: (value: number) => void;
    setEntity: (value: EntityAttributes | null) => void;
};
export type UseGafpriAttributesOrderReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriAttributesOrderProps = {
    salesChannel: string;
    useProductItems: UseGafpriAttributesOrderItemsReturn;
};
export declare function useGafpriAttributesOrder({ salesChannel, useProductItems, }: UseGafpriAttributesOrderProps): UseGafpriAttributesOrderReturn;
export {};
