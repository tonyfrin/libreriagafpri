import { validationInput } from '../helpers';
import { TYPE_DOCUMENT_ID_DIGIT_INPUT } from '../constants';

export type GeneralValidationTypeDocumentIdDigitProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationTypeDocumentIdDigit = ({
  value: newValue,
  setValid,
  currentValid,
  required = false,
  inputId = '',
}: GeneralValidationTypeDocumentIdDigitProps): boolean => {
  const valid = validationInput(
    newValue,
    /^\d{1,12}(-\d{1,12})?$/,
    `${TYPE_DOCUMENT_ID_DIGIT_INPUT}${inputId}`,
    required
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
