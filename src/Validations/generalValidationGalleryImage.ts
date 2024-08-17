import { validationInputArray } from './index';
import { GALLERY_IMAGE_INPUT } from '../constants';

export type GeneralValidationGalleryImageProps = {
  value: string[];
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationGalleryImage = ({
  value,
  setValid,
  currentValid,
  required = false,
  inputId = '',
}: GeneralValidationGalleryImageProps): boolean => {
  const valid = validationInputArray(
    value,
    /^(?:(?:[a-z][a-z0-9+-.]*):\/\/)?(?:[a-z0-9_-]+(?::[a-z0-9_-]+)*@)?(?:[a-z0-9.-]+|(?:\[[a-f0-9:.]+\]))(?::\d+)?(?:\/[^\s#?]*(?:\?[^\s#?]*)?(?:#[^\s#?]*)?)?$/i,
    `${GALLERY_IMAGE_INPUT}${inputId}`,
    required
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
