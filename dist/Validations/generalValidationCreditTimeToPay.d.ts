export type GeneralValidationCreditTimeToPayProps = {
    value: string | number;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationCreditTimeToPay: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationCreditTimeToPayProps) => boolean;
