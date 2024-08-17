import { ACCOUNT_TYPE_INPUT } from '../constants';
import { validationSelect } from '../helpers';

export type GeneralValidationSelectAccountTypeProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  inputId?: string;
};

export const generalValidationSelectAccountType = ({
  value,
  setValid,
  currentValid,
  inputId = '',
}: GeneralValidationSelectAccountTypeProps): boolean => {
  const validation: boolean = validationSelect(
    value,
    `${ACCOUNT_TYPE_INPUT}${inputId}`
  );
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};
