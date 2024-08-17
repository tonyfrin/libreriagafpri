export type GeneralValidationAccountNumberProps = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationAccountNumber: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationAccountNumberProps) => boolean;
