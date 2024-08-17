import { SHIPPING_TIME_DAYS_INPUT } from '../constants';
import { validationInputNumbers } from './index';

export type GeneralValidationShippingTimeDaysProps = {
  value: string | number;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationShippingTimeDays = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationShippingTimeDaysProps): boolean => {
  return validationInputNumbers({
    value,
    inputId: `${SHIPPING_TIME_DAYS_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
