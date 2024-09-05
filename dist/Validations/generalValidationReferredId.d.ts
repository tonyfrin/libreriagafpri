export type GeneralValidationReferredIdProps = {
    value: number | null;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationReferredId: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationReferredIdProps) => boolean;
