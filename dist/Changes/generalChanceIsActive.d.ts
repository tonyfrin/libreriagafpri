import { SingleValue } from 'react-select';
import { SelectDefault } from '../helpers';
export type GeneralChanceIsActiveProps = {
    options: SingleValue<{
        value: string;
        label: string;
    }>;
    validation?: (valueValid: string) => boolean;
    setDefault: (valueDefault: SelectDefault) => void;
    setValue: (transformedValue: boolean) => void;
};
export declare const generalChanceIsActive: ({ options, validation, setDefault, setValue, }: GeneralChanceIsActiveProps) => void;
