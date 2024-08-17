export type GeneralValidationSelectCurrenciesProps = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    inputId?: string;
};
export declare const generalValidationSelectCurrencies: ({ value, setValid, currentValid, inputId, }: GeneralValidationSelectCurrenciesProps) => boolean;
