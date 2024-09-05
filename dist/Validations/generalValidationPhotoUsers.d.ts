export type GeneralValidationPhotoUsersProps = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    inputId?: string;
    required?: boolean;
};
export declare const generalValidationPhotoUsers: ({ value, setValid, currentValid, inputId, required, }: GeneralValidationPhotoUsersProps) => boolean;
