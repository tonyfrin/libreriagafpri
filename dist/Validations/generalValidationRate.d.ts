export type GeneralValidationRateProps = {
    value: string | number;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationRate: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationRateProps) => boolean;
