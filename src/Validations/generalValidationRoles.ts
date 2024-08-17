import { validationSelect } from '../helpers';
import { ROLES_INPUT } from '../constants';

export type GeneralValidationRolesProps = {
  newValue: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  inputId?: string;
};

export const generalValidationRoles = ({
  newValue,
  setValid,
  currentValid,
  inputId = '',
}: GeneralValidationRolesProps): boolean => {
  const valid = validationSelect(newValue, `${ROLES_INPUT}${inputId}`);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
