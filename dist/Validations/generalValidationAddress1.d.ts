export type GeneralValidationAddress1Props = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationAddress1: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationAddress1Props) => boolean;
