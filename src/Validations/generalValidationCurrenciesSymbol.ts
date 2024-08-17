import { validationInput } from '../helpers';
import { CURRENCIES_SYMBOL_INPUT } from '../constants';

export type GeneralValidationCurrenciesSymbolProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationCurrenciesSymbol = ({
  value: newValue,
  setValid,
  currentValid,
  required = false,
  inputId = '',
}: GeneralValidationCurrenciesSymbolProps): boolean => {
  const valid = validationInput(
    newValue,
    /\$|Bs|€/,
    `${CURRENCIES_SYMBOL_INPUT}${inputId}`,
    required
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
