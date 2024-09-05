import { SingleValue } from 'react-select';
import { SelectDefault } from '../helpers';
export type GeneralChangeCurrencyProps = {
    options: SingleValue<{
        value: string;
        label: string;
    }>;
    validation?: (valueValid: string) => boolean;
    setDefault: (valueDefault: SelectDefault) => void;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeCurrency: ({ options, validation, setDefault, setValue, }: GeneralChangeCurrencyProps) => void;
