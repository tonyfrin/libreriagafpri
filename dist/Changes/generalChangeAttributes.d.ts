import { GeneralAttribute } from '../Validations';
export type GeneralChangeAttributesProps = {
    newValue: GeneralAttribute;
    selectedOptions: GeneralAttribute[];
    validation?: (value: GeneralAttribute[]) => boolean;
    setValue: (value: GeneralAttribute[]) => void;
};
export declare const generalChangeAttributes: ({ newValue, selectedOptions, validation, setValue, }: GeneralChangeAttributesProps) => void;
