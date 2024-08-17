export type GeneralChangeCustomerIdProps = {
    value: number;
    validation?: (valueValid: number) => boolean;
    setValue: (transformedValue: number) => void;
};
export declare const generalChangeCustomerId: ({ value, validation, setValue, }: GeneralChangeCustomerIdProps) => void;
