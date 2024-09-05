export type GeneralValidationPublicNameProps = {
    value: string;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationPublicName: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationPublicNameProps) => boolean;
