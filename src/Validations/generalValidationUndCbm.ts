import { validationInputNumbers } from './index';
import { UND_CBM_INPUT } from '../constants';

export type GeneralValidationUndCbmProps = {
  value: string | number;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationUndCbm = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationUndCbmProps): boolean => {
  return validationInputNumbers({
    value,
    inputId: `${UND_CBM_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
