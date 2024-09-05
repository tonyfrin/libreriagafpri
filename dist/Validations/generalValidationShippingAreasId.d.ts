export type GeneralValidationShippingAreasIdProps = {
    value: string | number;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationShippingAreasId: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationShippingAreasIdProps) => boolean;
