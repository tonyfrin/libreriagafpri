import { SUPPLIER_ID_INPUT } from '../constants';
import { validationInputNumbersWithValue } from './index';

export type GeneralValidationSupplierIdProps = {
  value: number | null;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationSupplierId = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationSupplierIdProps): boolean => {
  const valid = value !== null ? value : 0;
  return validationInputNumbersWithValue({
    value: valid,
    inputId: `${SUPPLIER_ID_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
