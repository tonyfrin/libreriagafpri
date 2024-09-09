export type GeneralChangeWeightProps = {
    value: string;
    validation?: (valueValid: number) => boolean;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeWeight: ({ value, validation, setValue, }: GeneralChangeWeightProps) => void;
