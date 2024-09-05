export type GeneralValidationAddress2Props = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationAddress2: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationAddress2Props) => boolean;
