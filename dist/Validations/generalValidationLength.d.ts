export type GeneralValidationLengthProps = {
    value: string | number;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationLength: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationLengthProps) => boolean;
