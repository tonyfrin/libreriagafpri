import { USER_NAME_INPUT } from '../constants';
import { validationInputNameLastNameUserName } from './index';

export type GeneralValidationUserNameProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationUserName = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationUserNameProps): boolean => {
  return validationInputNameLastNameUserName({
    value,
    inputId: `${USER_NAME_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
