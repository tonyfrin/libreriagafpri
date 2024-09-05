export type GeneralChangePostCodeProps = {
    value: string;
    validation?: (valueValid: string) => boolean;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangePostCode: ({ value, validation, setValue, }: GeneralChangePostCodeProps) => void;
