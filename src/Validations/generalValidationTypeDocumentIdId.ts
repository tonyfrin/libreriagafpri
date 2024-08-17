import { validationSelect } from '../helpers';
import { TYPE_DOCUMENT_ID_ID_INPUT } from '../constants';

export type GeneralValidationTypeDocumentIdIdProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  inputId?: string;
};

export const generalValidationTypeDocumentIdId = ({
  value: newValue,
  setValid,
  currentValid,
  inputId = '',
}: GeneralValidationTypeDocumentIdIdProps): boolean => {
  const valid = validationSelect(
    newValue,
    `${TYPE_DOCUMENT_ID_ID_INPUT}${inputId}`
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
