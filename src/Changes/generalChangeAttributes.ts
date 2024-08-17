import { GeneralAttribute } from '../Validations';
import { changeMultipleObjectAttributesInput } from '../helpers';

export type GeneralChangeAttributesProps = {
  newValue: GeneralAttribute;
  selectedOptions: GeneralAttribute[];
  validation?: (value: GeneralAttribute[]) => boolean;
  setValue: (value: GeneralAttribute[]) => void;
};

export const generalChangeAttributes = ({
  newValue,
  selectedOptions,
  validation,
  setValue,
}: GeneralChangeAttributesProps): void => {
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
