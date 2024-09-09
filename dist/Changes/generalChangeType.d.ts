import { SingleValue } from 'react-select';
import { SelectDefault } from '../helpers';
export type GeneralChangeTypeProps = {
    options: SingleValue<{
        value: string;
        label: string;
    }>;
    validation?: (valueValid: string) => boolean;
    setDefault: (valueDefault: SelectDefault) => void;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeType: ({ options, validation, setDefault, setValue, }: GeneralChangeTypeProps) => void;
