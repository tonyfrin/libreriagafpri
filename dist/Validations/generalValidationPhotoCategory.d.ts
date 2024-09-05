export type GeneralValidationPhotoCategoryProps = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationPhotoCategory: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationPhotoCategoryProps) => boolean;
