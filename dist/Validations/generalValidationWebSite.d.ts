export type GeneralValidationWebSiteProps = {
    newValue: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationWebSite: ({ newValue, setValid, currentValid, required, inputId, }: GeneralValidationWebSiteProps) => boolean;
