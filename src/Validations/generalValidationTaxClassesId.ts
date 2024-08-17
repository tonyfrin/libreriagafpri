import { validationInputNumbersWithValue } from './index';
import { TAX_CLASSES_INPUT } from '../constants';

export type GeneralValidationTaxClassesIdProps = {
  value: string | number;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationTaxClassesId = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationTaxClassesIdProps): boolean => {
  return validationInputNumbersWithValue({
    value,
    inputId: `${TAX_CLASSES_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
