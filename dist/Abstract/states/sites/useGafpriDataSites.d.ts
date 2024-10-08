type DeletedSite = {
    itemId: number;
};
export interface SitesAttributes {
    id: number;
    name: string;
    documentIndex: string;
    documentNumber: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    postCode: string;
    country: string;
    email: string;
    phone: string;
    currenciesId: number;
    currencyLocation: string;
    thousandsSeparator: string;
    decimalSeparator: string;
    decimalNumbers: number;
    taxes: boolean;
    host: string;
    createdAt: Date;
    modifiedAt: Date;
}
export type UseGafpriDataSitesReturn = {
    states: {
        isReady: boolean;
        sites: SitesAttributes[];
    };
    actions: {
        setIsReady: (value: boolean) => void;
        handleNewSite: (newItem: SitesAttributes) => void;
        handleDeletedSite: (value: DeletedSite) => void;
        handleUpdatedSite: (itemUpdate: SitesAttributes) => void;
        getById: (id: number) => SitesAttributes | null;
    };
};
export type UseGafpriDataSitesProps = {
    token: string | null;
};
export declare const useGafpriDataSites: ({ token, }: UseGafpriDataSitesProps) => UseGafpriDataSitesReturn;
export {};
