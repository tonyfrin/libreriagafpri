import { validationSelect } from '../helpers';
import { TYPE_INPUT } from '../constants';

export type GeneralValidationTypeProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  inputId?: string;
};

export const generalValidationType = ({
  value: newValue,
  setValid,
  currentValid,
  inputId = '',
}: GeneralValidationTypeProps): boolean => {
  const valid = validationSelect(newValue, `${TYPE_INPUT}${inputId}`);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
