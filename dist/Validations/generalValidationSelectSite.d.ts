export type GeneralValidationSelectSiteProps = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    inputId?: string;
};
export declare const generalValidationSelectSite: ({ value, setValid, currentValid, inputId, }: GeneralValidationSelectSiteProps) => boolean;
