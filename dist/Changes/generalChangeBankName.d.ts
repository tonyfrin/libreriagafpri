export type GeneralChangeBankNameProps = {
    value: string;
    validation?: (valueValid: string) => boolean;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeBankName: ({ value, validation, setValue, }: GeneralChangeBankNameProps) => string;
