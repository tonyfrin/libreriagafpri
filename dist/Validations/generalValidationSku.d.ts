export type GeneralValidationSkuProps = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationSku: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationSkuProps) => boolean;
