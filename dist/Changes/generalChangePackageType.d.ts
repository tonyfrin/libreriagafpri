import { SingleValue } from 'react-select';
import { SelectDefault } from '../helpers';
export type GeneralChangePackageTypeProps = {
    options: SingleValue<{
        value: string;
        label: string;
    }>;
    validation?: (value: string) => boolean;
    setDefault: (value: SelectDefault) => void;
    setValue: (value: string) => void;
};
export declare const generalChangePackageType: ({ options, validation, setDefault, setValue, }: GeneralChangePackageTypeProps) => void;
