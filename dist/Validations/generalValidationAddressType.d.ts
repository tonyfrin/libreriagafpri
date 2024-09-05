export type GeneralValidationAddressTypeProps = {
    newValue: string;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    inputId?: string;
};
export declare const generalValidationAddressType: ({ newValue, setValid, currentValid, inputId, }: GeneralValidationAddressTypeProps) => boolean;
