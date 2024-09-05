export type GeneralValidationBankTypeProps = {
    value: string;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    inputId?: string;
};
export declare const generalValidationBankType: ({ value, setValid, currentValid, inputId, }: GeneralValidationBankTypeProps) => boolean;
