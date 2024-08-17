import { PHOTO_CATEGORY_INPUT } from '../constants';
import { validationPhoto } from './index';

export type GeneralValidationPhotoCategoryProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationPhotoCategory = ({
  value,
  setValid,
  currentValid,
  required = false,
  inputId = '',
}: GeneralValidationPhotoCategoryProps): boolean => {
  return validationPhoto({
    value,
    inputId: `${PHOTO_CATEGORY_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
