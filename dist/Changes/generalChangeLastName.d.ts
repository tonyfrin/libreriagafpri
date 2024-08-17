export type GeneralChangeLastNameProps = {
    value: string;
    validation?: (valueValid: string) => boolean;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeLastName: ({ value, validation, setValue, }: GeneralChangeLastNameProps) => void;
