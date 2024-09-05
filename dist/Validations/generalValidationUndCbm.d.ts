export type GeneralValidationUndCbmProps = {
    value: string | number;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationUndCbm: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationUndCbmProps) => boolean;
