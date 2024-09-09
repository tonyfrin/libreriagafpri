import { SingleValue } from 'react-select';
import { SelectDefault } from '../helpers';
export type GeneralChangeStatusProps = {
    options: SingleValue<{
        value: string;
        label: string;
    }>;
    validation?: (valueValid: string) => boolean;
    setDefault: (valueDefault: SelectDefault) => void;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeStatus: ({ options, validation, setDefault, setValue, }: GeneralChangeStatusProps) => void;
