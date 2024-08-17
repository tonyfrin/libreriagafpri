export type GeneralValidationNoteProps = {
    value: string;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationNote: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationNoteProps) => boolean;
