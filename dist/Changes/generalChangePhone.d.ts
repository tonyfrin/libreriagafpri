export type GeneralChangePhoneProps = {
    value: string;
    validation?: (valueValid: string) => boolean;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangePhone: ({ value, validation, setValue, }: GeneralChangePhoneProps) => void;
