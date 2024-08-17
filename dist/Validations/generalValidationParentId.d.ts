export type GeneralValidationParentIdProps = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    inputId?: string;
};
export declare const generalValidationParentId: ({ value: newValue, setValid, currentValid, inputId, }: GeneralValidationParentIdProps) => boolean;
