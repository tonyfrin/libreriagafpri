export type GeneralValidationTagsProps = {
    value: string[];
    setValid: (value: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationTags: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationTagsProps) => boolean;
