export type GeneralChangeAddressProps = {
    value: string;
    validation?: (valueValid: string) => boolean;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeAddress: ({ value, validation, setValue, }: GeneralChangeAddressProps) => void;
