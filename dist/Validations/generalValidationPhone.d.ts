export type GeneralValidationPhoneProps = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationPhone: ({ value: newValue, setValid, currentValid, required, inputId, }: GeneralValidationPhoneProps) => boolean;
