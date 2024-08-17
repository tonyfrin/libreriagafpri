import { EXPENSES_TYPE_INPUT } from '../constants';
import { validationSelect } from '../helpers';

export type GeneralValidationExpensesTypeIdProps = {
  value: string;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  inputId?: string;
};

export const generalValidationExpensesTypeId = ({
  value,
  setValid,
  currentValid,
  inputId = '',
}: GeneralValidationExpensesTypeIdProps): boolean => {
  const valid = validationSelect(value, `${EXPENSES_TYPE_INPUT}${inputId}`);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
