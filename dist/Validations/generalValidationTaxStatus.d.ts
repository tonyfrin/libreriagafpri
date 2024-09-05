export type GeneralValidationTaxStatusProps = {
    newValue: string;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    inputId?: string;
};
export declare const generalValidationTaxStatus: ({ newValue, setValid, currentValid, inputId, }: GeneralValidationTaxStatusProps) => boolean;
