import { SingleValue } from 'react-select';
import { SelectDefault } from '../helpers';
export type GeneralChangeProjectsIdProps = {
    options: SingleValue<{
        value: string;
        label: string;
    }>;
    validation?: (valueValid: string) => boolean;
    setDefault: (valueDefault: SelectDefault) => void;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeProjectsId: ({ options, validation, setDefault, setValue, }: GeneralChangeProjectsIdProps) => void;
