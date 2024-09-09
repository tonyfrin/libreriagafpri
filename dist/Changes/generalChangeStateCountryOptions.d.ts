import { SelectDefault } from '../helpers';
export type GeneralChangeStateCountryOptionsProps = {
    country: string;
    setStateCountryDefault: (valueDefault: SelectDefault) => void;
    setStateCountry: (transformedValue: string) => void;
    setStateCountryOptions: (valueOptions: SelectDefault[]) => void;
    isReset: boolean;
};
export declare const generalChangeStateCountryOptions: ({ country, setStateCountryDefault, setStateCountry, setStateCountryOptions, isReset, }: GeneralChangeStateCountryOptionsProps) => void;
