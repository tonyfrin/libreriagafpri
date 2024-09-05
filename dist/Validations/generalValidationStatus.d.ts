export type GeneralValidationStatusProps = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    inputId?: string;
};
export declare const generalValidationStatus: ({ value: newValue, setValid, currentValid, inputId, }: GeneralValidationStatusProps) => boolean;
