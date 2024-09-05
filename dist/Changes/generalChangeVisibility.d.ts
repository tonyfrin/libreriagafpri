import { SingleValue } from 'react-select';
import { SelectDefault } from '../helpers';
export type GeneralChangeVisibilityProps = {
    options: SingleValue<{
        value: string;
        label: string;
    }>;
    validation?: (value: string) => boolean;
    setDefault: (value: SelectDefault) => void;
    setValue: (value: string) => void;
};
export declare const generalChangeVisibility: ({ options, validation, setDefault, setValue, }: GeneralChangeVisibilityProps) => void;
