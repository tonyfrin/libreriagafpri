import { PHOTO_ENTITY_INPUT } from '../constants';
import { validationPhoto } from './index';

export type GeneralValidationPhotoEntityProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationPhotoEntity = ({
  value,
  setValid,
  currentValid,
  required = false,
  inputId = '',
}: GeneralValidationPhotoEntityProps): boolean => {
  return validationPhoto({
    value,
    inputId: `${PHOTO_ENTITY_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
