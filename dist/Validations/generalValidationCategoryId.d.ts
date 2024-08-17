export type GeneralValidationCategoryIdProps = {
    value: number | null;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationCategoryId: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationCategoryIdProps) => boolean;
