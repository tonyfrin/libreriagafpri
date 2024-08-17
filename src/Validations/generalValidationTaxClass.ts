import { TAX_CLASS_INPUT } from '../constants';
import { validationSelect } from '../helpers';

export type GeneralValidationTaxClassProps = {
  newValue: string;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  inputId?: string;
};

export const generalValidationTaxClass = ({
  newValue,
  setValid,
  currentValid,
  inputId = '',
}: GeneralValidationTaxClassProps): boolean => {
  const valid = validationSelect(newValue, `${TAX_CLASS_INPUT}${inputId}`);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
