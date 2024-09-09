import { SingleValue } from 'react-select';
import { SelectDefault } from '../helpers';
export type GeneralChangeRolesProps = {
    options: SingleValue<{
        value: string;
        label: string;
    }>;
    validation?: (valueValid: string) => boolean;
    setDefault: (valueDefault: SelectDefault) => void;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeRoles: ({ options, validation, setDefault, setValue, }: GeneralChangeRolesProps) => void;
