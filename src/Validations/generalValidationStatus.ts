import { STATUS_INPUT } from '../constants';
import { validationSelect } from '../helpers';

export type GeneralValidationStatusProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  inputId?: string;
};

export const generalValidationStatus = ({
  value: newValue,
  setValid,
  currentValid,
  inputId = '',
}: GeneralValidationStatusProps): boolean => {
  const valid = validationSelect(newValue, `${STATUS_INPUT}${inputId}`);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
