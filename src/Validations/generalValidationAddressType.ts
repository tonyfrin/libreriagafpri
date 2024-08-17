import { ADDRESS_TYPE_INPUT } from '../constants';
import { validationSelect } from '../helpers';

export type GeneralValidationAddressTypeProps = {
  newValue: string;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  inputId?: string;
};

export const generalValidationAddressType = ({
  newValue,
  setValid,
  currentValid,
  inputId = '',
}: GeneralValidationAddressTypeProps): boolean => {
  const valid = validationSelect(newValue, `${ADDRESS_TYPE_INPUT}${inputId}`);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
