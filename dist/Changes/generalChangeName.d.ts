export type GeneralChangeNameProps = {
    value: string;
    validation?: (valueValid: string) => boolean;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeName: ({ value, validation, setValue, }: GeneralChangeNameProps) => string;
