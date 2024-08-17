import { CURRENCIES_LOCATIONS_INPUT } from '../constants';
import { validationSelect } from '../helpers';

export type GeneralValidationSelectCurrenciesLocationsProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  inputId?: string;
};

export const generalValidationSelectCurrenciesLocations = ({
  value,
  setValid,
  currentValid,
  inputId = '',
}: GeneralValidationSelectCurrenciesLocationsProps): boolean => {
  const validation: boolean = validationSelect(
    value,
    `${CURRENCIES_LOCATIONS_INPUT}${inputId}`
  );
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};
