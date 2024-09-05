export type GeneralValidationVisibilityProps = {
    value: string;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    inputId?: string;
};
export declare const generalValidationVisibility: ({ value: newValue, setValid, currentValid, inputId, }: GeneralValidationVisibilityProps) => boolean;
