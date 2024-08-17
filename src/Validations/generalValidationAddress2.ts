import { ADDRESS2_INPUT } from '../constants';
import { validationInputAddress } from './index';

export type GeneralValidationAddress2Props = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationAddress2 = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationAddress2Props): boolean => {
  return validationInputAddress({
    value,
    inputId: `${ADDRESS2_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
