export type GeneralValidationPasswordProps = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationPassword: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationPasswordProps) => boolean;
