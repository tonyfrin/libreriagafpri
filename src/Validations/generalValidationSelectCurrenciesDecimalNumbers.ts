import { CURRENCIES_DECIMAL_NUMBERS_INPUT } from '../constants';
import { validationSelect } from '../helpers';

export type GeneralValidationSelectCurrenciesDecimalNumbersProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  inputId?: string;
};

export const generalValidationSelectCurrenciesDecimalNumbers = ({
  value,
  setValid,
  currentValid,
  inputId = '',
}: GeneralValidationSelectCurrenciesDecimalNumbersProps): boolean => {
  const validation: boolean = validationSelect(
    value,
    `${CURRENCIES_DECIMAL_NUMBERS_INPUT}${inputId}`
  );
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};
