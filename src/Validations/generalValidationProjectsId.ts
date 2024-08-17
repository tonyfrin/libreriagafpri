import { PROJECTS_ID_INPUT } from '../constants';
import { validationSelect } from '../helpers';

export type GeneralValidationProjectsIdProps = {
  value: string;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  inputId?: string;
};

export const generalValidationProjectsId = ({
  value,
  setValid,
  currentValid,
  inputId = '',
}: GeneralValidationProjectsIdProps): boolean => {
  const valid = validationSelect(value, `${PROJECTS_ID_INPUT}${inputId}`);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
