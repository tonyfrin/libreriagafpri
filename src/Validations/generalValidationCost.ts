import { COST_INPUT } from '../constants';
import { validationInputNumbers } from './index';

export type GeneralValidationCostProps = {
  value: string | number;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationCost = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationCostProps): boolean => {
  return validationInputNumbers({
    value,
    inputId: `${COST_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
