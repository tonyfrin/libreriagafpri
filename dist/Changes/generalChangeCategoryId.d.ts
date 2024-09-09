export type GeneralChangeCategoryIdProps = {
    value: number | null;
    validation?: (valueValid: number) => boolean;
    setValue: (transformedValue: number | null) => void;
};
export declare const generalChangeCategoryId: ({ value, validation, setValue, }: GeneralChangeCategoryIdProps) => void;
