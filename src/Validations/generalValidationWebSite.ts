import { validationInput } from '../helpers';
import { WEB_SITE_INPUT } from '../constants';

export type GeneralValidationWebSiteProps = {
  newValue: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationWebSite = ({
  newValue,
  setValid,
  currentValid,
  required = false,
  inputId = '',
}: GeneralValidationWebSiteProps): boolean => {
  const valid = validationInput(
    newValue,
    /^[-a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_,.&:/'\-\s]+$/,
    `${WEB_SITE_INPUT}${inputId}`,
    required
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
