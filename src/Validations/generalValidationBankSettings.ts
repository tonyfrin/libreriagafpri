import { validationGeneralAttributes } from './index';
import type { GeneralAttribute } from '../index';
import { SETTINGS_INPUT } from '../constants';

export type GeneralValidationBankSettingsProps = {
  value: GeneralAttribute[];
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationBankSettings = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationBankSettingsProps): boolean => {
  return validationGeneralAttributes({
    value,
    inputId: `${SETTINGS_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
