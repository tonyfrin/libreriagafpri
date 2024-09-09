type State = {
    name: string;
    nameValid: boolean;
    postalCodes: string[];
    cities: string[];
    statesCountries: string[];
    countries: string[];
    currentId: number;
};
type Actions = {
    infoReset: () => void;
    validationName: (value: string) => boolean;
    changeName: (value: string) => void;
    setPostalCodes: (value: string[]) => void;
    pushPostalCodes: (value: string) => void;
    removePostalCode: (value: string) => void;
    changePostalCode: (postalCode: string, city: string, stateCountry: string, country: string) => void;
    setCities: (value: string[]) => void;
    pushCities: (value: string) => void;
    removeCities: (value: string) => void;
    changeCities: (city: string, stateCountry: string, country: string) => void;
    setStatesCountries: (value: string[]) => void;
    pushStatesCountries: (value: string) => void;
    removeStatesCountries: (value: string) => void;
    changeStateCountry: (stateCountry: string, country: string) => void;
    setCountries: (value: string[]) => void;
    pushCountries: (value: string) => void;
    removeCountries: (value: string) => void;
    changeCountry: (country: string) => void;
    validationButtonNext: () => boolean;
    setCurrentId: (value: number) => void;
};
export type UseGafpriAttributesShippingAreasReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriAttributesShippingAreas(): UseGafpriAttributesShippingAreasReturn;
export {};
