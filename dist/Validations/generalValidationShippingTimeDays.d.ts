export type GeneralValidationShippingTimeDaysProps = {
    value: string | number;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationShippingTimeDays: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationShippingTimeDaysProps) => boolean;
