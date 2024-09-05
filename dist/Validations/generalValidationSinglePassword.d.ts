export type GeneralValidationSinglePasswordProps = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationSinglePassword: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationSinglePasswordProps) => boolean;
