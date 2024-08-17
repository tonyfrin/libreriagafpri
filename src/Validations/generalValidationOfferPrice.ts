import { OFFER_PRICE_INPUT } from '../constants';
import { validationInputNumbers } from './index';

export type GeneralValidationOfferPriceProps = {
  value: string | number;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationOfferPrice = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationOfferPriceProps): boolean => {
  return validationInputNumbers({
    value,
    inputId: `${OFFER_PRICE_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
