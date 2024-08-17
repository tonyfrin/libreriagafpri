import { QTY_PACK_INPUT } from '../constants';
import { validationInputNumbers } from './index';

export type GeneralValidationQtyPackProps = {
  value: string | number;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationQtyPack = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationQtyPackProps): boolean => {
  return validationInputNumbers({
    value,
    inputId: `${QTY_PACK_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
