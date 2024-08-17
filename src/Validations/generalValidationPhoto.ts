import { validationPhoto } from './index';

export type GeneralValidationPhotoProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  required: boolean;
  inputId: string;
};

export const generalValidationPhoto = ({
  value,
  setValid,
  currentValid,
  required,
  inputId,
}: GeneralValidationPhotoProps): boolean => {
  return validationPhoto({
    value,
    inputId,
    setValid,
    currentValid,
    required,
  });
};
