import { PHOTO_DOCUMENT_ID_INPUT } from '../constants';
import { validationPhoto } from './index';

export type GeneralValidationPhotoDocumentIdProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationPhotoDocumentId = ({
  value,
  setValid,
  currentValid,
  required = false,
  inputId = '',
}: GeneralValidationPhotoDocumentIdProps): boolean => {
  return validationPhoto({
    value,
    inputId: `${PHOTO_DOCUMENT_ID_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
