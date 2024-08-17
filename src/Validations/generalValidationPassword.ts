import { PASSWORD_INPUT } from '../constants';
import { validationInputPassword } from './index';

export type GeneralValidationPasswordProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationPassword = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationPasswordProps): boolean => {
  return validationInputPassword({
    value,
    inputId: `${PASSWORD_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
