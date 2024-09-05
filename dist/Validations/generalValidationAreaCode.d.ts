export type GeneralValidationAreaCodeProps = {
    newValue: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    inputId?: string;
};
export declare const generalValidationAreaCode: ({ newValue, setValid, currentValid, inputId, }: GeneralValidationAreaCodeProps) => boolean;
