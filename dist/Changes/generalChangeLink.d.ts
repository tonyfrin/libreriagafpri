export type GeneralChangeLinkProps = {
    value: string;
    validation?: (valueValid: string) => boolean;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeLink: ({ value, validation, setValue, }: GeneralChangeLinkProps) => void;
