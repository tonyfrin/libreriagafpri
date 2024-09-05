export type GeneralValidationPermanentLinkProps = {
    value: string;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationPermanentLink: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationPermanentLinkProps) => boolean;
