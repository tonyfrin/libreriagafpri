import { ADDRESS1_INPUT } from '../constants';
import { validationInputAddress } from './index';

export type GeneralValidationAddress1Props = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationAddress1 = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationAddress1Props): boolean => {
  return validationInputAddress({
    value,
    inputId: `${ADDRESS1_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
