import { SingleValue } from 'react-select';
import { SelectDefault } from '../helpers';
export type GeneralChangeParentIdProps = {
    options: SingleValue<{
        value: string;
        label: string;
    }>;
    validation?: (valueValid: string) => boolean;
    setDefault: (valueDefault: SelectDefault) => void;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeParentId: ({ options, validation, setDefault, setValue, }: GeneralChangeParentIdProps) => void;
