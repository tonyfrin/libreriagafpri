import { validationInput } from '../helpers';
import { EMAIL_INPUT } from '../constants';

export type GeneralValidationEmailProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationEmail = ({
  value: newValue,
  setValid,
  currentValid,
  required = false,
  inputId = '',
}: GeneralValidationEmailProps): boolean => {
  const valid = validationInput(
    newValue,
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    `${EMAIL_INPUT}${inputId}`,
    required
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
