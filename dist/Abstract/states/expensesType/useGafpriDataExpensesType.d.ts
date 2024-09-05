import { SelectDefault } from '../../../helpers';
import { UseGafpriAttributesExpensesTypeReturn } from './useGafpriAttributesExpensesType';
export interface ExpensesTypeAttributes {
    id: number;
    slug: string;
    parentId: number | null;
    name: string;
    description: string | null;
    status: string;
    createdAt: Date;
    modifiedAt: Date;
}
type DeletedExpensesType = {
    itemId: number;
};
interface ExpensesTypeData {
    data: {
        items: ExpensesTypeAttributes[] | [] | null;
    };
}
type State = {
    isReady: boolean;
    items: ExpensesTypeData;
};
type Actions = {
    setIsReady: (value: boolean) => void;
    offItems: () => void;
    getById: (id: number) => ExpensesTypeAttributes | null;
    getChildren: (id: number) => ExpensesTypeAttributes[];
    handleNewItem: (newCurrency: ExpensesTypeAttributes) => void;
    handleUpdatedItem: (updatedCurrency: ExpensesTypeAttributes) => void;
    handleDeletedItem: ({ itemId }: DeletedExpensesType) => void;
    getOptionsItems: () => SelectDefault[];
};
export type UseGafpriDataExpensesTypeReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriDataExpensesTypeProps = {
    token: string | null;
    attributes: UseGafpriAttributesExpensesTypeReturn;
};
export declare function useGafpriDataExpensesType({ token, attributes, }: UseGafpriDataExpensesTypeProps): UseGafpriDataExpensesTypeReturn;
export {};
