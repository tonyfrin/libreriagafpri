export type GeneralChangePasswordProps = {
    value: string;
    validation?: (valueValid: string) => boolean;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangePassword: ({ value, validation, setValue, }: GeneralChangePasswordProps) => void;
