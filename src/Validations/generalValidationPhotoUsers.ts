import { PHOTO_USERS_INPUT } from '../constants';
import { validationPhoto } from './index';

export type GeneralValidationPhotoUsersProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  inputId?: string;
  required?: boolean;
};

export const generalValidationPhotoUsers = ({
  value,
  setValid,
  currentValid,
  inputId = '',
  required = false,
}: GeneralValidationPhotoUsersProps): boolean => {
  return validationPhoto({
    value,
    inputId: `${PHOTO_USERS_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
