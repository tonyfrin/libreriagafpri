import type { GeneralAttribute } from '../index';
export type GeneralValidationProductAttributesProps = {
    value: GeneralAttribute[];
    setValid: (value: boolean) => void;
    currentValid: boolean;
    required?: boolean;
    inputId?: string;
};
export declare const generalValidationProductAttributes: ({ value, setValid, currentValid, required, inputId, }: GeneralValidationProductAttributesProps) => boolean;
