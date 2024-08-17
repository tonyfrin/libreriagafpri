import { PERMANENT_LINK_INPUT } from '../constants';
import { validationLink } from './index';

export type GeneralValidationPermanentLinkProps = {
  value: string;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationPermanentLink = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationPermanentLinkProps): boolean => {
  return validationLink({
    value,
    inputId: `${PERMANENT_LINK_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
