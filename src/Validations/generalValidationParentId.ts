import { PARENT_ID_INPUT } from '../constants';
import { validationSelect } from '../helpers';

export type GeneralValidationParentIdProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  inputId?: string;
};

export const generalValidationParentId = ({
  value: newValue,
  setValid,
  currentValid,
  inputId = '',
}: GeneralValidationParentIdProps): boolean => {
  const valid = validationSelect(newValue, `${PARENT_ID_INPUT}${inputId}`);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
