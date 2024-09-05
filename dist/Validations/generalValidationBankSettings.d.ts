import type { GeneralAttribute } from '../index';
export type GeneralValidationBankSettingsProps = {
    value: GeneralAttribute[];
    setValid: (value: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationBankSettings: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationBankSettingsProps) => boolean;
