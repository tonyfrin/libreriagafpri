import { validationInputNumbers } from './index';
import { LENGTH_INPUT } from '../constants';

export type GeneralValidationLengthProps = {
  value: string | number;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationLength = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationLengthProps): boolean => {
  return validationInputNumbers({
    value,
    inputId: `${LENGTH_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
