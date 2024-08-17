import { NAME_INPUT } from '../constants';
import { validationInputNameLastNameUserName } from './index';

export type GeneralValidationNameProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationName = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationNameProps): boolean => {
  return validationInputNameLastNameUserName({
    value,
    inputId: `${NAME_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
