import { PASSWORD_INPUT } from '../constants';
import { validationInputSinglePassword } from './index';

export type GeneralValidationSinglePasswordProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationSinglePassword = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationSinglePasswordProps): boolean => {
  return validationInputSinglePassword({
    value,
    inputId: `${PASSWORD_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
