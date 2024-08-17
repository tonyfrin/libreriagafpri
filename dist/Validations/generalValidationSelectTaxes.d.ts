export type GeneralValidationSelectTaxesProps = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    inputId?: string;
};
export declare const generalValidationSelectTaxes: ({ value, setValid, currentValid, inputId, }: GeneralValidationSelectTaxesProps) => boolean;
