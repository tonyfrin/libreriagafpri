export type GeneralValidationWidthProps = {
    value: string | number;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationWidth: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationWidthProps) => boolean;
