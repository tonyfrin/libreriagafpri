export type GeneralValidationSelectCountryProps = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    inputId?: string;
};
export declare const generalValidationSelectCountry: ({ value, setValid, currentValid, inputId, }: GeneralValidationSelectCountryProps) => boolean;
