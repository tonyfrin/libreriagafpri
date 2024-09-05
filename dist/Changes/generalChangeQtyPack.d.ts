export type GeneralChangeQtyPackProps = {
    value: string;
    validation?: (valueValid: number) => boolean;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeQtyPack: ({ value, validation, setValue, }: GeneralChangeQtyPackProps) => void;
