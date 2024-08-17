import { WEIGHT_INPUT } from '../constants';
import { validationInputNumbers } from './index';

export type GeneralValidationWeightProps = {
  value: string | number;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationWeight = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationWeightProps): boolean => {
  return validationInputNumbers({
    value,
    inputId: `${WEIGHT_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
