import { LAST_NAME_INPUT } from '../constants';
import { validationInputNameLastNameUserName } from './index';

export type GeneralValidationLastNameProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationLastName = ({
  value,
  setValid,
  currentValid,
  required = false,
  inputId = '',
}: GeneralValidationLastNameProps): boolean => {
  return validationInputNameLastNameUserName({
    value,
    inputId: `${LAST_NAME_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
