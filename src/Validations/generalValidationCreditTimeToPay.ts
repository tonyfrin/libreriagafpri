import { validationInputNumbers } from './index';
import { CREDIT_TIME_TO_PAY_INPUT } from '../constants';

export type GeneralValidationCreditTimeToPayProps = {
  value: string | number;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationCreditTimeToPay = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationCreditTimeToPayProps): boolean => {
  return validationInputNumbers({
    value,
    inputId: `${CREDIT_TIME_TO_PAY_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
