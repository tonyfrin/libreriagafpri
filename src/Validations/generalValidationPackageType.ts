import { PACKAGE_TYPE_INPUT } from '../constants';
import { validationSelect } from '../helpers';

export type GeneralValidationPackageTypeProps = {
  newValue: string;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  inputId?: string;
};

export const generalValidationPackageType = ({
  newValue,
  setValid,
  currentValid,
  inputId = '',
}: GeneralValidationPackageTypeProps): boolean => {
  const valid = validationSelect(newValue, `${PACKAGE_TYPE_INPUT}${inputId}`);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
