import { SingleValue } from 'react-select';
import { SelectDefault } from '../helpers';
export type GeneralChangeCurrenciesIdProps = {
    options: SingleValue<{
        value: string;
        label: string;
    }>;
    validation?: (valueValid: string) => boolean;
    setDefault: (valueDefault: SelectDefault) => void;
    setValue: (transformedValue: number) => void;
};
export declare const generalChangeCurrenciesId: ({ options, validation, setDefault, setValue, }: GeneralChangeCurrenciesIdProps) => void;
