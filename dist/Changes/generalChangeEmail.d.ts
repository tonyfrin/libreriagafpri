export type GeneralChangeEmailProps = {
    value: string;
    validation?: (valueValid: string) => boolean;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeEmail: ({ value, validation, setValue, }: GeneralChangeEmailProps) => void;
