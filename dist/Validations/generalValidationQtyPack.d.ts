export type GeneralValidationQtyPackProps = {
    value: string | number;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationQtyPack: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationQtyPackProps) => boolean;
