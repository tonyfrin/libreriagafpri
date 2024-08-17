import { CURRENCIES_INPUT } from '../constants';
import { validationSelect } from '../helpers';

export type GeneralValidationSelectCurrenciesProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  inputId?: string;
};

export const generalValidationSelectCurrencies = ({
  value,
  setValid,
  currentValid,
  inputId = '',
}: GeneralValidationSelectCurrenciesProps): boolean => {
  const validation: boolean = validationSelect(
    value,
    `${CURRENCIES_INPUT}${inputId}`
  );
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};
