import { SingleValue } from 'react-select';
import { SelectDefault } from '../helpers';
export type GeneralChangeSiteProps = {
    options: SingleValue<{
        value: string;
        label: string;
    }>;
    validation?: (valueValid: string) => boolean;
    setDefault: (valueDefault: SelectDefault) => void;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeSite: ({ options, validation, setDefault, setValue, }: GeneralChangeSiteProps) => void;
