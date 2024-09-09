import { SingleValue } from 'react-select';
import { SelectDefault } from '../helpers';
export type GeneralChangeBankTypeProps = {
    options: SingleValue<{
        value: string;
        label: string;
    }>;
    validation?: (valueValid: string) => boolean;
    setDefault: (valueDefault: SelectDefault) => void;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeBankType: ({ options, validation, setDefault, setValue, }: GeneralChangeBankTypeProps) => void;
