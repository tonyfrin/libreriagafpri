export type GeneralValidationEmailProps = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationEmail: ({ value: newValue, setValid, currentValid, required, inputId, }: GeneralValidationEmailProps) => boolean;
