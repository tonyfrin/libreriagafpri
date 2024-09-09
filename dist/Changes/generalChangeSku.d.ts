export type GeneralChangeSkuProps = {
    value: string;
    validation?: (valueValid: string) => boolean;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeSku: ({ value, validation, setValue, }: GeneralChangeSkuProps) => void;
