import { SKU_INPUT } from '../constants';
import { validationInputSku } from './index';

export type GeneralValidationSkuProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationSku = ({
  value,
  setValid,
  currentValid,
  required = false,
  inputId = '',
}: GeneralValidationSkuProps): boolean => {
  return validationInputSku({
    value,
    inputId: `${SKU_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
