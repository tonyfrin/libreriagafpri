import { AREA_CODE_INPUT } from '../constants';
import { validationSelect } from '../helpers';

export type GeneralValidationAreaCodeProps = {
  newValue: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  inputId?: string;
};

export const generalValidationAreaCode = ({
  newValue,
  setValid,
  currentValid,
  inputId = '',
}: GeneralValidationAreaCodeProps): boolean => {
  const valid = validationSelect(newValue, `${AREA_CODE_INPUT}${inputId}`);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
