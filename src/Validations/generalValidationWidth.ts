import { WIDTH_INPUT } from '../constants';
import { validationInputNumbers } from './index';

export type GeneralValidationWidthProps = {
  value: string | number;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationWidth = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationWidthProps): boolean => {
  return validationInputNumbers({
    value,
    inputId: `${WIDTH_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
