export type GeneralChangeReferredIdProps = {
    value: number;
    validation?: (valueValid: number) => boolean;
    setValue: (transformedValue: number) => void;
};
export declare const generalChangeReferredId: ({ value, validation, setValue, }: GeneralChangeReferredIdProps) => void;
