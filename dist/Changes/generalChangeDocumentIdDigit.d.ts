export type GeneralChangeDocumentIdDigitProps = {
    value: string;
    validation?: (valueValid: string) => boolean;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeDocumentIdDigit: ({ value, validation, setValue, }: GeneralChangeDocumentIdDigitProps) => void;
