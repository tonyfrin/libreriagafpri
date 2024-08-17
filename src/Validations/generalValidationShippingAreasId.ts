import { SHIPPING_AREAS_INPUT } from '../constants';
import { validationInputNumbersWithValue } from './index';

export type GeneralValidationShippingAreasIdProps = {
  value: string | number;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationShippingAreasId = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationShippingAreasIdProps): boolean => {
  return validationInputNumbersWithValue({
    value,
    inputId: `${SHIPPING_AREAS_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
