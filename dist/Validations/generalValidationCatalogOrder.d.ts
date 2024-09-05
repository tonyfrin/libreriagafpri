export type GeneralValidationCatalogOrderProps = {
    value: string | number;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    input?: string;
};
export declare const generalValidationCatalogOrder: ({ value, setValid, currentValid, required, input, }: GeneralValidationCatalogOrderProps) => boolean;
