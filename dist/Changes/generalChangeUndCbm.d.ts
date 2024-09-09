export type GeneralChangeUndCbmProps = {
    value: string;
    validation?: (valueValid: number) => boolean;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeUndCbm: ({ value, validation, setValue, }: GeneralChangeUndCbmProps) => void;
