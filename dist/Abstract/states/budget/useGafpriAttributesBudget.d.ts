import { EntityAttributes } from '../entity';
import { UseGafpriAttributesBudgetItemsReturn } from '../productsItems';
type State = {
    customerId: number;
    customerIdValid: boolean;
    referredId: number;
    referredIdValid: boolean;
    note: string;
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
export type UseGafpriAttributesBudgetReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriAttributesBudgetProps = {
    useProductItems: UseGafpriAttributesBudgetItemsReturn;
};
export declare function useGafpriAttributesBudget({ useProductItems, }: UseGafpriAttributesBudgetProps): UseGafpriAttributesBudgetReturn;
export {};
