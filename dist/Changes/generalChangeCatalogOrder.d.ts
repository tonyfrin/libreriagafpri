export type GeneralChangeCatalogOrderProps = {
    value: string;
    validation?: (valueValid: number) => boolean;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeCatalogOrder: ({ value, validation, setValue, }: GeneralChangeCatalogOrderProps) => void;
