import { validationGeneralAttributes } from './index';
import type { GeneralAttribute } from '../index';
import { PRODUCT_ATTRIBUTES_INPUT } from '../constants';

export type GeneralValidationProductAttributesProps = {
  value: GeneralAttribute[];
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationProductAttributes = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationProductAttributesProps): boolean => {
  return validationGeneralAttributes({
    value,
    inputId: `${PRODUCT_ATTRIBUTES_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
