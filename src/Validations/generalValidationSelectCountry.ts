import { validationSelect } from '../helpers';
import { COUNTRY_INPUT } from '../constants';

export type GeneralValidationSelectCountryProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  inputId?: string;
};

export const generalValidationSelectCountry = ({
  value,
  setValid,
  currentValid,
  inputId = '',
}: GeneralValidationSelectCountryProps): boolean => {
  const validation: boolean = validationSelect(
    value,
    `${COUNTRY_INPUT}${inputId}`
  );
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};
