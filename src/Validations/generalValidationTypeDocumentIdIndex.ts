import { validationSelect } from '../helpers';
import { TYPE_DOCUMENT_ID_INDEX_INPUT } from '../constants';

export type GeneralValidationTypeDocumentIdIndexProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  inputId?: string;
};

export const generalValidationTypeDocumentIdIndex = ({
  value: newValue,
  setValid,
  currentValid,
  inputId = '',
}: GeneralValidationTypeDocumentIdIndexProps): boolean => {
  const valid = validationSelect(
    newValue,
    `${TYPE_DOCUMENT_ID_INDEX_INPUT}${inputId}`
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
