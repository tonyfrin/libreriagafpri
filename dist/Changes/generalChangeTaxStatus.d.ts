import { SingleValue } from 'react-select';
import { SelectDefault } from '../helpers';
export type GeneralChangeTaxStatusProps = {
    options: SingleValue<{
        value: string;
        label: string;
    }>;
    validation?: (value: string) => boolean;
    setDefault: (value: SelectDefault) => void;
    setValue: (value: string) => void;
};
export declare const generalChangeTaxStatus: ({ options, validation, setDefault, setValue, }: GeneralChangeTaxStatusProps) => void;
