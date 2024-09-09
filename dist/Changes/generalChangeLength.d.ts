export type GeneralChangeLengthProps = {
    value: string;
    validation?: (valueValid: number) => boolean;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeLength: ({ value, validation, setValue, }: GeneralChangeLengthProps) => void;
