import { AVAILABLE_SHIPPING_SERVICES_INPUT } from '../constants';
import { validationSelect } from '../helpers';

export type GeneralValidationAvailableShippingServicesProps = {
  newValue: string;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  inputId?: string;
};

export const generalValidationAvailableShippingServices = ({
  newValue,
  setValid,
  currentValid,
  inputId = '',
}: GeneralValidationAvailableShippingServicesProps): boolean => {
  const valid = validationSelect(
    newValue,
    `${AVAILABLE_SHIPPING_SERVICES_INPUT}${inputId}`
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
