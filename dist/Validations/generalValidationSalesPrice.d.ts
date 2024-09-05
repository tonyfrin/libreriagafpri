export type GeneralValidationSalesPriceProps = {
    value: string | number;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationSalesPrice: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationSalesPriceProps) => boolean;
