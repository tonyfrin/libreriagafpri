import { SingleValue } from 'react-select';
import { SelectDefault } from '../helpers';
export type GeneralChangeCityStateCountryProps = {
    options: SingleValue<{
        value: string;
        label: string;
    }>;
    validation?: (valueValid: string) => boolean;
    setDefault: (valueDefault: SelectDefault) => void;
    setValue: (transformedValue: string) => void;
    setIsReset: (valueReset: boolean) => void;
};
export declare const generalChangeCityStateCountry: ({ options, validation, setDefault, setValue, setIsReset, }: GeneralChangeCityStateCountryProps) => void;
