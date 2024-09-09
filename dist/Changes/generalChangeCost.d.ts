export type GeneralChangeCostProps = {
    value: string;
    validation?: (valueValid: number) => boolean;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeCost: ({ value, validation, setValue, }: GeneralChangeCostProps) => void;
