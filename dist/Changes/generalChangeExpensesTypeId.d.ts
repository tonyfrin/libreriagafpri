import { SingleValue } from 'react-select';
import { SelectDefault } from '../helpers';
export type GeneralChangeExpensesTypeIdProps = {
    options: SingleValue<{
        value: string;
        label: string;
    }>;
    validation?: (valueValid: string) => boolean;
    setDefault: (valueDefault: SelectDefault) => void;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeExpensesTypeId: ({ options, validation, setDefault, setValue, }: GeneralChangeExpensesTypeIdProps) => void;
