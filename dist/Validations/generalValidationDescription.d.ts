export type GeneralValidationDescriptionProps = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationDescription: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationDescriptionProps) => boolean;
