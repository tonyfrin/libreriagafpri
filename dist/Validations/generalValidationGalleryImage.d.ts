export type GeneralValidationGalleryImageProps = {
    value: string[];
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationGalleryImage: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationGalleryImageProps) => boolean;
