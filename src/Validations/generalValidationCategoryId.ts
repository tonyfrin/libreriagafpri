import { CATEGORY_INPUT } from '../constants';
import { validationInputNumbersWithValue } from './index';

export type GeneralValidationCategoryIdProps = {
  value: number | null;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationCategoryId = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationCategoryIdProps): boolean => {
  const valid = value !== null ? value : 1;
  return validationInputNumbersWithValue({
    value: valid,
    inputId: `${CATEGORY_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
