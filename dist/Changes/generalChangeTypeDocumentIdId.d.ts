import { SingleValue } from 'react-select';
import { SelectDefault } from '../helpers';
export type GeneralChangeTypeDocumentIdIdProps = {
    options: SingleValue<{
        value: string;
        label: string;
    }>;
    validation?: (valueValid: string) => boolean;
    setDefault: (valueDefault: SelectDefault) => void;
    setValue: (transformedValue: number | null) => void;
};
export declare const generalChangeTypeDocumentIdId: ({ options, validation, setDefault, setValue, }: GeneralChangeTypeDocumentIdIdProps) => void;
