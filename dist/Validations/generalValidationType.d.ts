export type GeneralValidationTypeProps = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    inputId?: string;
};
export declare const generalValidationType: ({ value: newValue, setValid, currentValid, inputId, }: GeneralValidationTypeProps) => boolean;
