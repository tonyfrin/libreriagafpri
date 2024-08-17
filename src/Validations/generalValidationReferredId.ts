import { REFFERED_ID_INPUT } from '../constants';
import { validationInputNumbersWithValue } from './index';

export type GeneralValidationReferredIdProps = {
  value: number | null;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationReferredId = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationReferredIdProps): boolean => {
  const valid = value !== null ? value : 1;
  return validationInputNumbersWithValue({
    value: valid,
    inputId: `${REFFERED_ID_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
