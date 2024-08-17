import { GeneralAttribute } from '../Validations';
import { changeMultipleObjectAttributesInput } from '../helpers';

export type GeneralChangeSettingsProps = {
  newValue: GeneralAttribute;
  selectedOptions: GeneralAttribute[];
  validation?: (value: GeneralAttribute[]) => boolean;
  setValue: (value: GeneralAttribute[]) => void;
};

export const generalChangeSettings = ({
  newValue,
  selectedOptions,
  validation,
  setValue,
}: GeneralChangeSettingsProps): void => {
  const defaultValidation = (): boolean => {
    return true;
  };

  changeMultipleObjectAttributesInput({
    newValue,
    selectedOptions,
    validation: validation || defaultValidation,
    setValue,
  });
};
