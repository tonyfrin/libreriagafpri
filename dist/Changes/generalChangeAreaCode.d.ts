import { SingleValue } from 'react-select';
import { SelectDefault } from '../helpers';
export type GeneralChangeAreaCodeProps = {
    options: SingleValue<{
        value: string;
        label: string;
    }>;
    validation?: (valueValid: string) => boolean;
    setDefault: (valueDefault: SelectDefault) => void;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeAreaCode: ({ options, validation, setDefault, setValue, }: GeneralChangeAreaCodeProps) => void;
