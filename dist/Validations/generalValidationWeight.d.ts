export type GeneralValidationWeightProps = {
    value: string | number;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationWeight: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationWeightProps) => boolean;
