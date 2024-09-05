export type GeneralValidationNameProps = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationName: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationNameProps) => boolean;
