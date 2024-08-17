export type GeneralValidationPhotoDocumentIdProps = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationPhotoDocumentId: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationPhotoDocumentIdProps) => boolean;
