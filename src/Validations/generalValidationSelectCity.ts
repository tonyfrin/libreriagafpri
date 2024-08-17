import { CITY_INPUT } from '../constants';
import { validationSelect } from '../helpers';

export type GeneralValidationSelectCityProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  inputId?: string;
};

export const generalValidationSelectCity = ({
  value,
  setValid,
  currentValid,
  inputId = '',
}: GeneralValidationSelectCityProps): boolean => {
  const validation: boolean = validationSelect(
    value,
    `${CITY_INPUT}${inputId}`
  );
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};
