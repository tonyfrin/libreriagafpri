import { DESCRIPTION_INPUT } from '../constants';
import { validationInputDescription } from './index';

export type GeneralValidationDescriptionProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationDescription = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationDescriptionProps): boolean => {
  return validationInputDescription({
    value,
    inputId: `${DESCRIPTION_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
