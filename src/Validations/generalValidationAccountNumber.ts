import { ACCOUNT_NUMBER_INPUT } from '../constants';
import { validationInputNameLastNameUserName } from './index';

export type GeneralValidationAccountNumberProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationAccountNumber = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationAccountNumberProps): boolean => {
  return validationInputNameLastNameUserName({
    value,
    inputId: `${ACCOUNT_NUMBER_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
