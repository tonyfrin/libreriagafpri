import { GeneralAttribute } from '../Validations';
export type GeneralChangeSettingsProps = {
    newValue: GeneralAttribute;
    selectedOptions: GeneralAttribute[];
    validation?: (value: GeneralAttribute[]) => boolean;
    setValue: (value: GeneralAttribute[]) => void;
};
export declare const generalChangeSettings: ({ newValue, selectedOptions, validation, setValue, }: GeneralChangeSettingsProps) => void;
