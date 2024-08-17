export type GeneralValidationCostProps = {
    value: string | number;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationCost: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationCostProps) => boolean;
