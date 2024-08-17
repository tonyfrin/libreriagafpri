export type GeneralChangeOfferPriceProps = {
    value: string;
    validation?: (valueValid: number) => boolean;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeOfferPrice: ({ value, validation, setValue, }: GeneralChangeOfferPriceProps) => void;
