export type GeneralValidationHeightProps = {
    value: string | number;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationHeight: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationHeightProps) => boolean;
