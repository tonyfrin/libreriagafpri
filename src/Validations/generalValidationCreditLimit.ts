import { validationInputNumbers } from './index';
import { CREDIT_LIMIT_INPUT } from '../constants';

export type GeneralValidationCreditLimitProps = {
  value: string | number;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationCreditLimit = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationCreditLimitProps): boolean => {
  return validationInputNumbers({
    value,
    inputId: `${CREDIT_LIMIT_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
