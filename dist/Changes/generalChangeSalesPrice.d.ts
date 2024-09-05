export type GeneralChangeSalesPriceProps = {
    value: string;
    validation?: (valueValid: number) => boolean;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeSalesPrice: ({ value, validation, setValue, }: GeneralChangeSalesPriceProps) => void;
