export type GeneralValidationCurrenciesSymbolProps = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationCurrenciesSymbol: ({ value: newValue, setValid, currentValid, required, inputId, }: GeneralValidationCurrenciesSymbolProps) => boolean;
