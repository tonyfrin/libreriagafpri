export type GeneralChangeHeightProps = {
    value: string;
    validation?: (valueValid: number) => boolean;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeHeight: ({ value, validation, setValue, }: GeneralChangeHeightProps) => void;
