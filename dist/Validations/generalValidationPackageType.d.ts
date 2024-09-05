export type GeneralValidationPackageTypeProps = {
    newValue: string;
    setValid: (value: boolean) => void;
    currentValid: boolean;
    inputId?: string;
};
export declare const generalValidationPackageType: ({ newValue, setValid, currentValid, inputId, }: GeneralValidationPackageTypeProps) => boolean;
