export type GeneralValidationRegionProps = {
    value: string[];
    setValid: (value: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationRegion: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationRegionProps) => boolean;
