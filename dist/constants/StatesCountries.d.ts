type States = {
    [key: string]: string;
};
type StatesCountry = {
    [key: string]: States[] | [];
};
export declare const StatesCountries: StatesCountry[];
export {};
