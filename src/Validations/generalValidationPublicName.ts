import { PUBLIC_NAME_INPUT } from '../constants';
import { validationInputNameLastNameUserName } from './index';

export type GeneralValidationPublicNameProps = {
  value: string;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationPublicName = ({
  value,
  setValid,
  currentValid,
  required = false,
  inputId = '',
}: GeneralValidationPublicNameProps): boolean => {
  return validationInputNameLastNameUserName({
    value,
    inputId: `${PUBLIC_NAME_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
