import { CURRENCIES_SEPARATOR_INPUT } from '../constants';
import { validationSelect } from '../helpers';

export type GeneralValidationSelectCurrenciesSeparatorProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  inputId?: string;
};

export const generalValidationSelectCurrenciesSeparator = ({
  value,
  setValid,
  currentValid,
  inputId = '',
}: GeneralValidationSelectCurrenciesSeparatorProps): boolean => {
  const validation: boolean = validationSelect(
    value,
    `${CURRENCIES_SEPARATOR_INPUT}${inputId}`
  );
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};
