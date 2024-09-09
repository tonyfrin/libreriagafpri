export type GeneralChangeAccountNumberProps = {
    value: string;
    validation?: (valueValid: string) => boolean;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeAccountNumber: ({ value, validation, setValue, }: GeneralChangeAccountNumberProps) => string;
