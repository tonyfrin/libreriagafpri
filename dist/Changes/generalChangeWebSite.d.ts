export type GeneralChangeWebSiteProps = {
    value: string;
    validation?: (valueValid: string) => boolean;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeWebSite: ({ value, validation, setValue, }: GeneralChangeWebSiteProps) => void;
