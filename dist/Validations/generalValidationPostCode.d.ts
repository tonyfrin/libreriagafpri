export type GeneralValidationPostCodeProps = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationPostCode: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationPostCodeProps) => boolean;
