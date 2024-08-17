export type GeneralValidationLastNameProps = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationLastName: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationLastNameProps) => boolean;
