import { SingleValue } from 'react-select';
import { SelectDefault } from '../helpers';
export type GeneralChangeTaxClassProps = {
    options: SingleValue<{
        value: string;
        label: string;
    }>;
    validation?: (value: string) => boolean;
    setDefault: (value: SelectDefault) => void;
    setValue: (value: string) => void;
};
export declare const generalChangeTaxClass: ({ options, validation, setDefault, setValue, }: GeneralChangeTaxClassProps) => void;
