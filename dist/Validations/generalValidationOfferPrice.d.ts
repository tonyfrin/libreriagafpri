export type GeneralValidationOfferPriceProps = {
    value: string | number;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationOfferPrice: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationOfferPriceProps) => boolean;
