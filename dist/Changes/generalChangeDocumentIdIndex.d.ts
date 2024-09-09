import { SingleValue } from 'react-select';
import { SelectDefault } from '../helpers';
export type GeneralChangeDocumentIdIndexProps = {
    options: SingleValue<{
        value: string;
        label: string;
    }>;
    validation?: (valueValid: string) => boolean;
    setDefault: (valueDefault: SelectDefault) => void;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeDocumentIdIndex: ({ options, validation, setDefault, setValue, }: GeneralChangeDocumentIdIndexProps) => void;
