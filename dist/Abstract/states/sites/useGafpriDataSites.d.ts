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
    type: string;
    status: string;
    latitude: string;
    longitude: string;
    image: string;
    galleryImage: string[];
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
        getSites: () => Promise<any>;
        setSites: (value: SitesAttributes[]) => void;
    };
};
export type UseGafpriDataSitesProps = {
    token: string | null;
};
export declare const useGafpriDataSites: ({ token, }: UseGafpriDataSitesProps) => UseGafpriDataSitesReturn;
export {};
