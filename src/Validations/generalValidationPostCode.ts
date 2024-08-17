import { validationInput } from '../helpers';
import { ZIP_CODE_INPUT } from '../constants';

export type GeneralValidationPostCodeProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationPostCode = ({
  value,
  setValid,
  currentValid,
  required = false,
  inputId = '',
}: GeneralValidationPostCodeProps): boolean => {
  const valid = validationInput(
    value,
    /^[a-zA-Z0-9]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#()\-.\s]+$/,
    `${ZIP_CODE_INPUT}${inputId}`,
    required
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
