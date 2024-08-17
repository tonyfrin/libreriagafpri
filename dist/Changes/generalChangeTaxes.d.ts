import { SingleValue } from 'react-select';
import { SelectDefault } from '../helpers';
export type GeneralChangeTaxesProps = {
    options: SingleValue<{
        value: string;
        label: string;
    }>;
    validation?: (valueValid: string) => boolean;
    setDefault: (valueDefault: SelectDefault) => void;
    setValue: (transformedValue: boolean) => void;
};
export declare const generalChangeTaxes: ({ options, validation, setDefault, setValue, }: GeneralChangeTaxesProps) => void;
