export type GeneralValidationCustomerIdProps = {
    value: number | null;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationCustomerId: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationCustomerIdProps) => boolean;
