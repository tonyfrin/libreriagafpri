export type GeneralValidationUserNameProps = {
    value: string;
    setValid: (valueValid: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationUserName: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationUserNameProps) => boolean;
