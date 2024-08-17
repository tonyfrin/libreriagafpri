export type GeneralValidationTypeDocumentIdDigitProps = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationTypeDocumentIdDigit: ({ value: newValue, setValid, currentValid, required, inputId, }: GeneralValidationTypeDocumentIdDigitProps) => boolean;
