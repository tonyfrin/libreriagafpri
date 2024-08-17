import { CASH_REGISTER_TYPE_INPUT } from '../constants';
import { validationSelect } from '../helpers';

export type GeneralValidationCashRegisterTypeProps = {
  value: string;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  inputId?: string;
};

export const generalValidationCashRegisterType = ({
  value,
  setValid,
  currentValid,
  inputId = '',
}: GeneralValidationCashRegisterTypeProps): boolean => {
  const valid = validationSelect(
    value,
    `${CASH_REGISTER_TYPE_INPUT}${inputId}`
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
