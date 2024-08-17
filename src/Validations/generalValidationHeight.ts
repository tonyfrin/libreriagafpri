import { HEIGHT_INPUT } from '../constants';
import { validationInputNumbers } from './index';

export type GeneralValidationHeightProps = {
  value: string | number;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationHeight = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationHeightProps): boolean => {
  return validationInputNumbers({
    value,
    inputId: `${HEIGHT_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
