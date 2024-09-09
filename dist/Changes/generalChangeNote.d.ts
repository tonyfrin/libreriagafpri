export type GeneralChangeNoteProps = {
    value: string;
    setValue: (transformedValue: string) => void;
    validation?: (valueValid: string) => boolean;
};
export declare const generalChangeNote: ({ value, setValue, validation, }: GeneralChangeNoteProps) => void;
