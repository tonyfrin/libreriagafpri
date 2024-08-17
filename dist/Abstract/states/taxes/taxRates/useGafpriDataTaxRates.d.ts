export interface TaxRatesAttributes {
    id: number;
    taxClassesId: number;
    rate: number;
    city: string;
    state: string;
    country: string;
    postCode?: string;
    createdAt: Date;
    modifiedAt: Date;
}
interface TaxRatesData {
    data: {
        items: TaxRatesAttributes[] | [] | null;
    };
}
type DeletedTaxRates = {
    itemId: number;
};
type State = {
    items: TaxRatesData;
    isReady: boolean;
};
type Actions = {
    offItems: () => void;
    handleNewItem: (newItem: TaxRatesAttributes) => void;
    handleUpdated: (updatedItem: TaxRatesAttributes) => void;
    handleDeleted: ({ itemId }: DeletedTaxRates) => void;
    getById: (id: number) => TaxRatesAttributes | null;
    filterByTaxClassesId: (taxClassesId: number) => TaxRatesAttributes[];
};
export type UseGafpriDataTaxRatesReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriDataTaxRatesProps = {
    token: string | null;
};
export declare function useGafpriDataTaxRates({ token, }: UseGafpriDataTaxRatesProps): UseGafpriDataTaxRatesReturn;
export {};
