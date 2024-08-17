import { validationSelect } from '../helpers';
import { TAX_STATUS_INPUT } from '../constants';

export type GeneralValidationTaxStatusProps = {
  newValue: string;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  inputId?: string;
};

export const generalValidationTaxStatus = ({
  newValue,
  setValid,
  currentValid,
  inputId = '',
}: GeneralValidationTaxStatusProps): boolean => {
  const valid = validationSelect(newValue, `${TAX_STATUS_INPUT}${inputId}`);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
