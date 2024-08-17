import { CUSTOMER_ID_INPUT } from '../constants';
import { validationInputNumbersWithValue } from './index';

export type GeneralValidationCustomerIdProps = {
  value: number | null;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationCustomerId = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationCustomerIdProps): boolean => {
  const valid = value !== null ? value : 0;
  return validationInputNumbersWithValue({
    value: valid,
    inputId: `${CUSTOMER_ID_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
