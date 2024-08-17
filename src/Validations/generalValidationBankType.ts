import { BANK_TYPE_INPUT } from '../constants';
import { validationSelect } from '../helpers';

export type GeneralValidationBankTypeProps = {
  value: string;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  inputId?: string;
};

export const generalValidationBankType = ({
  value,
  setValid,
  currentValid,
  inputId = '',
}: GeneralValidationBankTypeProps): boolean => {
  const valid = validationSelect(value, `${BANK_TYPE_INPUT}${inputId}`);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
