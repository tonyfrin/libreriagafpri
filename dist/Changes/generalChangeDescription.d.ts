export type GeneralChangeDescriptionProps = {
    value: string;
    validation?: (valueValid: string) => boolean;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeDescription: ({ value, validation, setValue, }: GeneralChangeDescriptionProps) => void;
