import { SingleValue } from 'react-select';
import { SelectDefault } from '../helpers';
export type GeneralChangeCurrenciesDecimalNumbersProps = {
    options: SingleValue<{
        value: string;
        label: string;
    }>;
    validation?: (valueValid: string) => boolean;
    setDefault: (valueDefault: SelectDefault) => void;
    setValue: (transformedValue: number) => void;
};
export declare const generalChangeCurrenciesDecimalNumbers: ({ options, validation, setDefault, setValue, }: GeneralChangeCurrenciesDecimalNumbersProps) => void;
