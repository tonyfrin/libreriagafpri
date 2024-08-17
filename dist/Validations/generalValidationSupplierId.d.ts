export type GeneralValidationSupplierIdProps = {
    value: number | null;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationSupplierId: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationSupplierIdProps) => boolean;
