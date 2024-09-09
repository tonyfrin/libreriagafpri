export type GeneralChangeCurrenciesSymbolProps = {
    value: string;
    validation?: (valueValid: string) => boolean;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeCurrenciesSymbol: ({ value, validation, setValue, }: GeneralChangeCurrenciesSymbolProps) => void;
