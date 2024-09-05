export type GeneralChangeWidthProps = {
    value: string;
    validation?: (valueValid: number) => boolean;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeWidth: ({ value, validation, setValue, }: GeneralChangeWidthProps) => void;
