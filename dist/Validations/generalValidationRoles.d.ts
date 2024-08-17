export type GeneralValidationRolesProps = {
    newValue: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    inputId?: string;
};
export declare const generalValidationRoles: ({ newValue, setValid, currentValid, inputId, }: GeneralValidationRolesProps) => boolean;
