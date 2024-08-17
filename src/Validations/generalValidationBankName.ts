import { BANK_NAME_INPUT } from '../constants';
import { validationInputNameLastNameUserName } from './index';

export type GeneralValidationBankNameProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationBankName = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationBankNameProps): boolean => {
  return validationInputNameLastNameUserName({
    value,
    inputId: `${BANK_NAME_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
