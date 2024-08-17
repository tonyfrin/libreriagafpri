export type GeneralValidationPhotoEntityProps = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationPhotoEntity: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationPhotoEntityProps) => boolean;
