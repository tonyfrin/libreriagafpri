import { validationSelect } from '../helpers';
import { TAXES_INPUT } from '../constants';

export type GeneralValidationSelectTaxesProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  inputId?: string;
};

export const generalValidationSelectTaxes = ({
  value,
  setValid,
  currentValid,
  inputId = '',
}: GeneralValidationSelectTaxesProps): boolean => {
  const validation: boolean = validationSelect(
    value,
    `${TAXES_INPUT}${inputId}`
  );
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};
