import { SelectDefault } from '../../../../helpers';
export interface TaxClassesAttributes {
    id: number;
    slug: string;
    name: string;
    description?: string;
    createdAt: Date;
    modifiedAt: Date;
}
interface TaxClassesData {
    data: {
        items: TaxClassesAttributes[] | [] | null;
    };
}
type DeletedTaxClasses = {
    itemId: number;
};
type State = {
    items: TaxClassesData;
    isReady: boolean;
};
type Actions = {
    offItems: () => void;
    handleNewItem: (newItem: TaxClassesAttributes) => void;
    handleUpdated: (updatedItem: TaxClassesAttributes) => void;
    handleDeleted: ({ itemId }: DeletedTaxClasses) => void;
    getById: (id: number) => TaxClassesAttributes | null;
    getOptions: () => SelectDefault[];
};
export type UseGafpriDataTaxClassesReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriDataTaxClassesProps = {
    token: string | null;
};
export declare function useGafpriDataTaxClasses({ token, }: UseGafpriDataTaxClassesProps): UseGafpriDataTaxClassesReturn;
export {};
