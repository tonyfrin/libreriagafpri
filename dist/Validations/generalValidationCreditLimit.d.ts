export type GeneralValidationCreditLimitProps = {
    value: string | number;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationCreditLimit: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationCreditLimitProps) => boolean;
