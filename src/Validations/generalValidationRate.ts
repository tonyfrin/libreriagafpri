import { validationInputNumbers } from './index';
import { RATE_INPUT } from '../constants';

export type GeneralValidationRateProps = {
  value: string | number;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationRate = ({
  value,
  setValid,
  currentValid,
  required = false,
  inputId = '',
}: GeneralValidationRateProps): boolean => {
  return validationInputNumbers({
    value,
    inputId: `${RATE_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
