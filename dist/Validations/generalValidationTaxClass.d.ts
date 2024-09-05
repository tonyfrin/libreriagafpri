export type GeneralValidationTaxClassProps = {
    newValue: string;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    inputId?: string;
};
export declare const generalValidationTaxClass: ({ newValue, setValid, currentValid, inputId, }: GeneralValidationTaxClassProps) => boolean;
