export type GeneralValidationPhotoProps = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    required: boolean;
    inputId: string;
};
export declare const generalValidationPhoto: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationPhotoProps) => boolean;
