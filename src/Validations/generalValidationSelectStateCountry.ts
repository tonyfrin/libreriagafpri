import { validationSelect } from '../helpers';
import { STATE_COUNTRY_INPUT } from '../constants';

export type GeneralValidationSelectStateCountryProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  inputId?: string;
};

export const generalValidationSelectStateCountry = ({
  value,
  setValid,
  currentValid,
  inputId = '',
}: GeneralValidationSelectStateCountryProps): boolean => {
  const validation: boolean = validationSelect(
    value,
    `${STATE_COUNTRY_INPUT}${inputId}`
  );
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};
