export type GeneralValidationBankNameProps = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationBankName: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationBankNameProps) => boolean;
