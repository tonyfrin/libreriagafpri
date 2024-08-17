import { VISIBILITY_INPUT } from '../constants';
import { validationSelect } from '../helpers';

export type GeneralValidationVisibilityProps = {
  value: string;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  inputId?: string;
};

export const generalValidationVisibility = ({
  value: newValue,
  setValid,
  currentValid,
  inputId = '',
}: GeneralValidationVisibilityProps): boolean => {
  const valid = validationSelect(newValue, `${VISIBILITY_INPUT}${inputId}`);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
