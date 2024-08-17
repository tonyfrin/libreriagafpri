import { PHONE_INPUT } from '../constants';
import { validationInput } from '../helpers';

export type GeneralValidationPhoneProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationPhone = ({
  value: newValue,
  setValid,
  currentValid,
  required = false,
  inputId = '',
}: GeneralValidationPhoneProps): boolean => {
  const valid = validationInput(
    newValue,
    /^[0-9]{10,20}/,
    `${PHONE_INPUT}${inputId}`,
    required
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
