type States = {
    [key: string]: string;
};
type StatesCountry = {
    [key: string]: States[] | [];
};
type City = {
    [key: string]: StatesCountry[];
};
export declare const Cities: City[];
export {};
