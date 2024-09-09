import { SingleValue } from 'react-select';
import { SelectDefault } from '../helpers';
export type GeneralChangeCashRegisterTypeProps = {
    options: SingleValue<{
        value: string;
        label: string;
    }>;
    validation?: (valueValid: string) => boolean;
    setDefault: (valueDefault: SelectDefault) => void;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeCashRegisterType: ({ options, validation, setDefault, setValue, }: GeneralChangeCashRegisterTypeProps) => void;
