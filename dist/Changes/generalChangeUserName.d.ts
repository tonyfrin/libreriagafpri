export type GeneralChangeUserNameProps = {
    value: string;
    validation?: (valueValid: string) => boolean;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeUserName: ({ value, validation, setValue, }: GeneralChangeUserNameProps) => void;
