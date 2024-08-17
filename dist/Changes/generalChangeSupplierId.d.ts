export type GeneralChangeSupplierIdProps = {
    value: number;
    validation?: (valueValid: number) => boolean;
    setValue: (transformedValue: number) => void;
};
export declare const generalChangeSupplierId: ({ value, validation, setValue, }: GeneralChangeSupplierIdProps) => void;
