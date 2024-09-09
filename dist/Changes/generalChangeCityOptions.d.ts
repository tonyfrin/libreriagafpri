import { SelectDefault } from '../helpers';
export type GeneralChangeCityOptionsProps = {
    country: string;
    state: string;
    setCityDefault: (valueDefault: SelectDefault) => void;
    setCity: (transformedValue: string) => void;
    setCityOptions: (valueOptions: SelectDefault[]) => void;
    isReset: boolean;
};
export declare const generalChangeCityOptions: ({ country, state, setCityDefault, setCity, setCityOptions, isReset, }: GeneralChangeCityOptionsProps) => void;
